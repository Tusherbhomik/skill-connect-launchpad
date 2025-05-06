
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Plus, Upload, User } from "lucide-react";

// Form schema
const profileFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  location: z.string().min(2, "Please enter your location"),
  title: z.string().min(2, "Please enter your professional title"),
  bio: z.string().max(500, "Bio cannot exceed 500 characters"),
  yearsOfExperience: z.string(),
  educationLevel: z.string(),
  availability: z.string(),
  remotePreference: z.string(),
  skills: z.array(z.string()).optional(),
  linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  github: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

const ProfileForm: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "JavaScript", "React", "CSS", "HTML", "UI/UX Design"
  ]);
  const [newSkill, setNewSkill] = useState("");
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      location: "New York, NY",
      title: "Frontend Developer",
      bio: "Passionate frontend developer with experience in creating responsive, accessible web applications. Focused on user-centered design and modern development practices.",
      yearsOfExperience: "3-5",
      educationLevel: "bachelors",
      availability: "2weeks",
      remotePreference: "hybrid",
      skills: selectedSkills,
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
      portfolio: "https://alexjohnson.dev",
    },
  });
  
  const onSubmit = (data: z.infer<typeof profileFormSchema>) => {
    console.log(data);
    toast.success("Profile updated successfully!");
  };
  
  const handleAddSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill("");
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-skill-navy-800">Profile</h1>
        <p className="text-gray-500">Update your personal and professional information</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Profile Photo</CardTitle>
              <CardDescription>
                Upload a professional picture for your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="h-32 w-32 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
                <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-skill-teal-500 hover:bg-skill-teal-600 h-8 w-8">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-2">
                JPG, PNG or GIF. 1MB max size.
              </p>
              <Button variant="outline" className="mt-4">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
              <CardDescription>
                Complete your profile to increase visibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profile completion</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-skill-teal-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Personal Information</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Professional Details</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Skills</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="h-4 w-4 border border-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm">Upload Resume</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="h-4 w-4 border border-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm">Portfolio Projects</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal and professional details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormDescription>
                              This will be visible to employers who contact you
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Professional Details</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Professional Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Frontend Developer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Professional Bio</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell employers about yourself and your expertise"
                                className="resize-none min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              {500 - (field.value?.length || 0)} characters remaining
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="yearsOfExperience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Years of Experience</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0-1">0-1 years</SelectItem>
                                  <SelectItem value="1-3">1-3 years</SelectItem>
                                  <SelectItem value="3-5">3-5 years</SelectItem>
                                  <SelectItem value="5-10">5-10 years</SelectItem>
                                  <SelectItem value="10+">10+ years</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="educationLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Education Level</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select education level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="highschool">High School</SelectItem>
                                  <SelectItem value="associate">Associate Degree</SelectItem>
                                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                                  <SelectItem value="masters">Master's Degree</SelectItem>
                                  <SelectItem value="phd">PhD or Doctorate</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Availability</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select availability" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate</SelectItem>
                                  <SelectItem value="2weeks">2 weeks</SelectItem>
                                  <SelectItem value="1month">1 month</SelectItem>
                                  <SelectItem value="3months">3+ months</SelectItem>
                                  <SelectItem value="notavailable">Not available</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="remotePreference"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Remote Work Preference</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select preference" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="remote">Remote only</SelectItem>
                                  <SelectItem value="onsite">Onsite only</SelectItem>
                                  <SelectItem value="hybrid">Hybrid preferred</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Skills</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Your Skills</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedSkills.map((skill, index) => (
                            <div 
                              key={index} 
                              className="bg-skill-teal-100 text-skill-teal-700 px-3 py-1 rounded-full text-sm flex items-center"
                            >
                              {skill}
                              <button 
                                type="button"
                                onClick={() => handleRemoveSkill(skill)}
                                className="ml-2 text-skill-teal-600 hover:text-skill-teal-800"
                              >
                                &times;
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Add a skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          className="flex-1"
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={handleAddSkill}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Online Presence</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input placeholder="https://linkedin.com/in/username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub Profile</FormLabel>
                            <FormControl>
                              <Input placeholder="https://github.com/username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Portfolio Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourportfolio.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <CardFooter className="px-0 pt-4">
                    <Button type="submit" className="bg-skill-teal-500 hover:bg-skill-teal-600">
                      Update Profile
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
