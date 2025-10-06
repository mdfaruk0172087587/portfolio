import React from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import roommateProject from '../assets/roommate-project.PNG'
import devProject from '../assets/dev-forum.PNG'
import courseProject from '../assets/course-management.PNG'
import { Link } from 'react-router';
const Projects = () => {
    return (
        <div className="py-5 mt-16 ">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-lg text-center mb-10">My Projects</h1>
            <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
               {/* 1 project */}
                <div className="flex group flex-col overflow-hidden shadow-md rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-3 space-y-3 ">
                    <img src={devProject} alt='devProject' className="w-full h-[250px] object-cover transform transition-transform duration-[2000ms] ease-in-out group-hover:-translate-y-4" />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">DevForum - A Modern Discussion Platform</h2>
                        <Link to='/projectDetails/dev-forum' className="mt-auto text-center text-black hover:bg-blue-700 border border-blue-600 shadow-blue-300 px-4 py-2 rounded-lg shadow-md transition duration-300">View More / Details</Link>
                    </div>
                </div>
                {/* 2 project */}
                <div className="flex group flex-col overflow-hidden shadow-md rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-3 space-y-3">
                    <img src={roommateProject} alt='Roommate Finder' className="w-full h-[250px] object-cover transform transition-transform duration-[2000ms] ease-in-out group-hover:-translate-y-4" />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">Roommate Finder</h2>
                       <Link to='/projectDetails/roommate-finder' className="mt-auto text-center text-black hover:bg-blue-700 border border-blue-600 shadow-blue-300 px-4 py-2 rounded-lg shadow-md transition duration-300">View More / Details</Link>
                    </div>
                </div>
                  {/* 3 project */}
                <div className="flex group flex-col overflow-hidden shadow-md rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-3 space-y-3 ">
                    <img src={courseProject} alt='courseProject' className="w-full h-[250px] object-cover transform transition-transform duration-[2000ms] ease-in-out group-hover:-translate-y-4" />
                    <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">Course Management System</h2>
                       <Link to='/projectDetails/course-management' className="mt-auto text-center text-black hover:bg-blue-700 border border-blue-600 shadow-blue-300 px-4 py-2 rounded-lg shadow-md transition duration-300">View More / Details</Link>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>
                <Link to='/projectDetails/allProject' className='mt-auto text-center text-black hover:bg-blue-700 border border-blue-600 shadow-blue-300 px-4 py-2 rounded-lg shadow-md transition duration-300 text-2xl flex items-center gap-3'>More Project <span><FaArrowRightFromBracket /></span></Link>
            </div>
        </div>
    );
};

export default Projects;
