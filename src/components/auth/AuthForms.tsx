
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";

export const AuthForms: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("login");
  
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {activeTab === "login" ? "Welcome back" : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            {activeTab === "login" 
              ? "Enter your credentials to access your account" 
              : "Fill out the form to create your SkillBridge account"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm navigate={navigate} />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm setActiveTab={setActiveTab} />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-500 mt-2 w-full">
            {activeTab === "login" 
              ? "Don't have an account? " 
              : "Already have an account? "
            }
            <button
              onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
              className="text-skill-teal-500 hover:underline"
            >
              {activeTab === "login" ? "Sign up" : "Login"}
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

interface LoginFormProps {
  navigate: (path: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully logged in!");
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <button
            type="button"
            className="text-sm text-skill-teal-500 hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-skill-teal-500 hover:bg-skill-teal-600"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  );
};

interface SignupFormProps {
  setActiveTab: (tab: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ setActiveTab }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      setActiveTab('login');
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="text-xs text-gray-500">
          Password must be at least 8 characters long and include 
          letters, numbers, and special characters.
        </p>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-skill-teal-500 hover:bg-skill-teal-600"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Create account"}
      </Button>
      <p className="text-xs text-center text-gray-500">
        By creating an account, you agree to our 
        <button className="text-skill-teal-500 hover:underline ml-1">
          Terms of Service
        </button> and 
        <button className="text-skill-teal-500 hover:underline ml-1">
          Privacy Policy
        </button>
      </p>
    </form>
  );
};

export default AuthForms;
