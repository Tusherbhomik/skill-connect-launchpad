
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bell, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  Clock, 
  User
} from "lucide-react";
import SkillsRadar from '../skills/SkillsRadar';
import JobCard from '../jobs/JobCard';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-skill-navy-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Alex! Here's your progress overview.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button className="bg-skill-teal-500 hover:bg-skill-teal-600">
            <Briefcase className="h-4 w-4 mr-2" />
            Browse Jobs
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="animate-fade-in">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-skill-teal-500" />
              Profile Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-sm">75% complete</span>
              <span className="text-skill-teal-500 text-sm font-medium">15/20</span>
            </div>
            <Progress value={75} className="h-2 bg-gray-100" />
            <div className="mt-4">
              <p className="text-sm text-gray-600">Complete your profile to increase visibility to employers.</p>
              <Button variant="link" className="text-skill-teal-500 p-0 h-auto mt-1">
                Complete Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-skill-teal-500" />
              Skills Match Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-sm">Great match for 24 jobs</span>
              <span className="text-skill-teal-500 text-sm font-medium">82%</span>
            </div>
            <Progress value={82} className="h-2 bg-gray-100" />
            <div className="mt-4">
              <p className="text-sm text-gray-600">Your skills match with top jobs in your area.</p>
              <Button variant="link" className="text-skill-teal-500 p-0 h-auto mt-1">
                View Matching Jobs
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-skill-teal-500" />
              Applications Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-50 rounded-md p-2">
                <p className="text-xl font-bold text-skill-teal-500">3</p>
                <p className="text-xs text-gray-500">Applied</p>
              </div>
              <div className="bg-gray-50 rounded-md p-2">
                <p className="text-xl font-bold text-skill-navy-700">1</p>
                <p className="text-xs text-gray-500">Interviews</p>
              </div>
              <div className="bg-gray-50 rounded-md p-2">
                <p className="text-xl font-bold text-green-500">0</p>
                <p className="text-xs text-gray-500">Offers</p>
              </div>
            </div>
            <Button variant="link" className="text-skill-teal-500 p-0 h-auto mt-4 w-full text-center">
              Track Applications
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Jobs</CardTitle>
              <CardDescription>Based on your skills and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <JobCard 
                title="Frontend Developer"
                company="TechCorp Inc."
                location="Remote"
                salary="$80K - $110K"
                skills={["React", "TypeScript", "Tailwind CSS"]}
                matchPercentage={95}
              />
              <JobCard 
                title="UX/UI Designer"
                company="DesignHub"
                location="New York, NY"
                salary="$75K - $95K"
                skills={["Figma", "User Research", "Prototyping"]}
                matchPercentage={88}
              />
              <JobCard 
                title="Full Stack Developer"
                company="GrowthStart"
                location="San Francisco, CA"
                salary="$100K - $130K"
                skills={["JavaScript", "Node.js", "MongoDB"]}
                matchPercentage={78}
              />
              <Button variant="outline" className="w-full mt-2">View All Jobs</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Workshops and networking opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-skill-teal-100 text-skill-teal-700 p-2 rounded-md flex flex-col items-center">
                    <span className="text-sm font-bold">MAY</span>
                    <span className="text-lg font-bold">12</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Tech Networking Mixer</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>6:00 PM - 8:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Connect with tech professionals and recruiters from leading companies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-skill-teal-100 text-skill-teal-700 p-2 rounded-md flex flex-col items-center">
                    <span className="text-sm font-bold">MAY</span>
                    <span className="text-lg font-bold">18</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Resume Workshop</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>2:00 PM - 4:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Learn how to create an ATS-friendly resume that highlights your skills.
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">View All Events</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills Analysis</CardTitle>
              <CardDescription>Your current skill distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <SkillsRadar />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Top skills in your profile:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-skill-teal-100 text-skill-teal-700 text-xs px-2 py-1 rounded-full">
                    Frontend Development
                  </span>
                  <span className="bg-skill-teal-100 text-skill-teal-700 text-xs px-2 py-1 rounded-full">
                    UI/UX Design
                  </span>
                  <span className="bg-skill-teal-100 text-skill-teal-700 text-xs px-2 py-1 rounded-full">
                    React
                  </span>
                  <span className="bg-skill-teal-100 text-skill-teal-700 text-xs px-2 py-1 rounded-full">
                    Responsive Design
                  </span>
                </div>
              </div>
              <Tabs defaultValue="missing" className="mt-6">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="missing">Missing Skills</TabsTrigger>
                  <TabsTrigger value="learning">Learning</TabsTrigger>
                </TabsList>
                <TabsContent value="missing">
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Node.js</span>
                      <Button variant="outline" className="h-7 text-xs">Add Skill</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AWS</span>
                      <Button variant="outline" className="h-7 text-xs">Add Skill</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Docker</span>
                      <Button variant="outline" className="h-7 text-xs">Add Skill</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="learning">
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">TypeScript</span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">65%</span>
                        <Progress value={65} className="w-20 h-2" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">GraphQL</span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">40%</span>
                        <Progress value={40} className="w-20 h-2" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React Native</span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">25%</span>
                        <Progress value={25} className="w-20 h-2" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <Button variant="outline" className="w-full mt-4">
                <User className="h-4 w-4 mr-2" />
                Update Skills Profile
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Learning Path</CardTitle>
              <CardDescription>Suggested courses based on your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Advanced React Patterns</h4>
                    <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>
                  <Progress value={35} className="h-1 mt-2" />
                  <p className="text-xs text-gray-500 mt-1">35% Complete</p>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">TypeScript Fundamentals</h4>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      Not Started
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Estimated: 8 hours</p>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">UI/UX Best Practices</h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Completed on Apr 28</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Explore More Courses</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
