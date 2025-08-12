import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import logoP from '../assets/logoP.png';
import '../navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; 
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const Links = (
    <>
      <li>
        <a
          href="/#home"
          className={activeSection === 'home' ? 'active-link' : ''}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/#about"
          className={activeSection === 'about' ? 'active-link' : ''}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/#skills"
          className={activeSection === 'skills' ? 'active-link' : ''}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="/#projects"
          className={activeSection === 'projects' ? 'active-link' : ''}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/#contact"
          className={activeSection === 'contact' ? 'active-link' : ''}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar animated-gradient bg-[#F3F7FF] shadow-sm px-6 md:px-13 lg:px-31">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a href="/#home">
          <img className="w-12 h-12 rounded-full" src={logoP} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <button className="flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
          <FaDownload /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
