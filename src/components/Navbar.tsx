
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-skill-teal-500 font-bold text-xl">Skill</span>
              <span className="text-skill-navy-800 font-bold text-xl">Bridge</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-skill-teal-500">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-skill-teal-500">
                About
              </Link>
              <Link to="/jobs" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-skill-teal-500">
                Jobs
              </Link>
              <Link to="/skills" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-skill-teal-500">
                Skills
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-skill-teal-500 hover:bg-skill-teal-600">
                Sign up
              </Button>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skill-teal-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skill-teal-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skill-teal-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/jobs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skill-teal-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <Link
              to="/skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skill-teal-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-skill-teal-500 hover:bg-skill-teal-600">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
