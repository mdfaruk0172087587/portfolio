import React from 'react';
import farukPik from '../assets/farukpik.jpg'
import { FaDownload, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
  return (
    <section
      className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10  px-4 md:px-8 lg:px-16 mt-5"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
          Hi, I’m <span className="text-blue-600">Omar Faruk</span>
        </h1>
        <p className="text-lg lg:text-xl text-black mt-3">
          Frontend / <span className=' text-blue-600'>
            <Typewriter
              words={['MERN Stack Developer']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </p>
        <p className="mt-5 max-w-lg mx-auto md:mx-0 text-black">
          I am a motivated web developer with a goal to create beautiful, fast, and user-friendly web applications. I love learning new technologies and solving problems.
        </p>
        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-blue-600">
          <a
            href="https://www.facebook.com/faruk5872a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-800 transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/omar-faruk8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/mdfaruk0172087587"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-800 transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <FaGithub size={24} />
          </a>
        </div>
        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
         <a href="/Omar Faruk Cv.pdf" download="Omar_Faruk_Resume.pdf" className="inline-flex items-center gap-2 text-black hover:bg-blue-700 border border-blue-600 shadow-blue-300 px-6 py-3 rounded-lg shadow-md transition duration-300">
           <FaDownload /> Download CV
         </a>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 hover:scale-105 transition-transform duration-300">
          <img
            src={farukPik}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
