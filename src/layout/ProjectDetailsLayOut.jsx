import React from 'react';
import { Outlet } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import '../navbar.css'
import { HashLink } from 'react-router-hash-link';
const ProjectDetailsLayOut = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <nav className="navbar animated-gradient shadow-sm px-6 md:px-13 lg:px-31">
                    <HashLink smooth to="/#projects" className="flex items-center gap-2 text-sm md:text-base font-medium text-black hover:text-white hover:bg-blue-700 border border-blue-600 shadow-blue-300 px-6 py-3 rounded-lg shadow-md transition duration-300">
                        <FaArrowLeft className="text-lg" /> Back to Projects
                    </HashLink>
                </nav>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default ProjectDetailsLayOut;