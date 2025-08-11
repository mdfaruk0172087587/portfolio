import React from 'react';
import Navbar from '../compnents/Navbar';
import About from '../compnents/About';
import Skills from '../compnents/Skills';
import Eddication from '../compnents/Eddication';
import Projects from '../compnents/Projects';
import Contact from '../compnents/Contact';
import Home from '../compnents/Home';

const HomeLayOut = () => {
     const Links = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Edication</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
        
    </>
    return (
        <div>
            <header>
                {/* <Navbar></Navbar> */}
                 <div className="navbar bg-base-100 shadow-sm px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">logo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
            </header>
            <main className='max-w-[90%] mx-auto space-y-5 my-5'>
                {/* home */}
                <section>
                    <Home></Home>
                </section>
                {/* about */}
                <section>
                    <About></About>
                </section>
                {/* skills */}
                <section>
                    <Skills></Skills>
                </section>
                {/* edication */}
                <section>
                    <Eddication></Eddication>
                </section>
                {/* project */}
               <section>
                 <Projects></Projects>
               </section>
               {/* contact */}
               <section>
                <Contact></Contact>
               </section>
            </main>
            <footer>

            </footer>
            
        </div>
    );
};

export default HomeLayOut;