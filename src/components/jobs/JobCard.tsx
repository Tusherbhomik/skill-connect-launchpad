
import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Briefcase, MapPin, DollarSign } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  matchPercentage: number;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  salary,
  skills,
  matchPercentage
}) => {
  // Determine match color based on percentage
  let matchColor = "text-green-600";
  if (matchPercentage < 80) {
    matchColor = "text-amber-600";
  }
  if (matchPercentage < 60) {
    matchColor = "text-orange-600";
  }
  
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="bg-skill-teal-100 p-3 rounded-lg flex items-center justify-center mr-4 mb-4 md:mb-0">
          <Briefcase className="h-6 w-6 text-skill-teal-600" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-gray-600">{company}</p>
              <div className="flex flex-wrap items-center text-sm text-gray-500 mt-1 gap-3">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  <span>{salary}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-3 sm:mt-0 sm:ml-4 flex flex-col items-end">
              <div className={`font-medium ${matchColor}`}>
                {matchPercentage}% Match
              </div>
              <div className="w-24 mt-1">
                <Progress value={matchPercentage} className="h-1" />
              </div>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 mb-3">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col xs:flex-row gap-2 mt-3">
              <Button className="bg-skill-teal-500 hover:bg-skill-teal-600 text-sm h-8">
                Apply Now
              </Button>
              <Button variant="outline" className="text-sm h-8">
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
