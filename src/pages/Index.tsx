
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import { CheckCircle, BriefcaseBusiness, Lightbulb, Users, ArrowRight, CheckCheck, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-skill-navy-800 to-skill-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Bridge Your Skills <br />to Job Opportunities
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Connect your education to employment through skill-based matching, personalized learning paths, and direct connections with employers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link to="/signup">
                  <Button className="bg-skill-teal-500 hover:bg-skill-teal-600 text-white px-6 py-6 h-auto text-lg w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 h-auto text-lg w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-skill-teal-400 to-skill-teal-600 rounded-lg blur opacity-50"></div>
                <div className="bg-white p-4 rounded-lg shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Person working on laptop" 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-skill-teal-500 mb-2">10,000+</div>
              <p className="text-gray-600">Active Job Seekers</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-skill-teal-500 mb-2">2,500+</div>
              <p className="text-gray-600">Employer Partners</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-skill-teal-500 mb-2">85%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-skill-navy-800 mb-4">How SkillBridge Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects your skills and education directly to job opportunities through a comprehensive approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="rounded-full bg-skill-teal-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="text-skill-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Skill Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Identify your strengths and areas for improvement with our comprehensive skill assessment tools.
                </p>
                <Link to="/skills" className="text-skill-teal-500 hover:text-skill-teal-600 flex items-center text-sm font-medium">
                  Explore Assessments
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="rounded-full bg-skill-teal-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="text-skill-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Personalized Learning</h3>
                <p className="text-gray-600 mb-4">
                  Access customized learning paths based on your skill gaps and career goals.
                </p>
                <Link to="/learning" className="text-skill-teal-500 hover:text-skill-teal-600 flex items-center text-sm font-medium">
                  View Learning Paths
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="rounded-full bg-skill-teal-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BriefcaseBusiness className="text-skill-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Job Matching</h3>
                <p className="text-gray-600 mb-4">
                  Get matched with jobs that align with your skills, experience, and career aspirations.
                </p>
                <Link to="/jobs" className="text-skill-teal-500 hover:text-skill-teal-600 flex items-center text-sm font-medium">
                  Browse Job Matches
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-skill-navy-800 mb-4">Why Choose SkillBridge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers unique advantages for job seekers looking to bridge the gap between education and employment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCheck className="h-6 w-6 text-skill-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Skill-Based Matching</h3>
                <p className="text-gray-600">
                  Our intelligent algorithm matches you with jobs based on your actual skills and competencies, not just your formal education.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCheck className="h-6 w-6 text-skill-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Continuous Feedback</h3>
                <p className="text-gray-600">
                  Receive ongoing feedback from employers and our platform to help you improve and grow professionally.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCheck className="h-6 w-6 text-skill-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Direct Employer Connections</h3>
                <p className="text-gray-600">
                  Connect directly with employers who are looking for candidates with your specific skill set.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCheck className="h-6 w-6 text-skill-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Career Growth Analytics</h3>
                <p className="text-gray-600">
                  Track your progress and growth over time with detailed analytics and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-skill-navy-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from job seekers who found their perfect match through SkillBridge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                      alt="Sarah L." 
                      className="rounded-full w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah L.</h4>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "SkillBridge helped me identify my strengths and connected me with a company that valued my specific skill set. I landed a job within weeks!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Michael T." 
                      className="rounded-full w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael T.</h4>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The personalized learning path helped me close skill gaps and prepare for interviews. Now I'm working at my dream company."
                </p>
              </CardContent>
            </Card>
            
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Elena K." 
                      className="rounded-full w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Elena K.</h4>
                    <p className="text-sm text-gray-500">UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "SkillBridge's visual skills tracking helped me showcase my abilities to employers. I received multiple offers within a month!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-skill-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bridge the Gap?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully connected their skills to employment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-white text-skill-teal-700 hover:bg-gray-100 px-6 py-6 h-auto text-lg">
                Create an Account
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 h-auto text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-skill-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-skill-teal-400 font-bold text-xl">Skill</span>
                <span className="text-white font-bold text-xl">Bridge</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting education to employment through skills-based matching.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Data Processing</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
