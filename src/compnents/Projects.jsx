import React from 'react';
import roommateProject from '../assets/roommate-project.PNG'
import devProject from '../assets/dev-forum.PNG'
import courseProject from '../assets/course-management.PNG'
import { Link } from 'react-router';
const Projects = () => {
    return (
        <div className="py-5 ">
            <h1 className="text-3xl font-medium text-center  text-gray-800">My Projects</h1>
            <p className="text-center mb-8 text-gray-600 max-w-xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
            </p>
            <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
               {/* 1 project */}
                <div className="bg-white rounded-lg  overflow-hidden flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img src={devProject} alt='devProject' className="w-full h-48 object-cover" />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">DevForum - A Modern Discussion Platform</h2>
                        <Link to='/projectDetails/dev-forum' className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">View More / Details</Link>
                    </div>
                </div>
                {/* 2 project */}
                <div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img src={roommateProject} alt='Roommate Finder' className="w-full h-48 object-cover" />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">Roommate Finder</h2>
                       <Link to='/projectDetails/roommate-finder' className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">View More / Details</Link>
                    </div>
                </div>
                  {/* 3 project */}
                <div className="bg-white rounded-lg  overflow-hidden flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img src={courseProject} alt='courseProject' className="w-full h-48 object-cover" />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">Course Management System</h2>
                       <Link to='/projectDetails/course-management' className="mt-auto text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">View More / Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
