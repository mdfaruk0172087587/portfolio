import React from 'react';
import aboutLottie from '../assets/aboutLottie.json';
import Lottie from 'lottie-react';
const About = () => {
  return (
    <div className='mt-10'>
      {/* mobile column, lg row */}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center px-5 md:px-8 lg:px-15 gap-8">
        {/* Text Section */}
        <div className="flex-1 text-gray-300">
          <h1 className="text-3xl font-medium text-center text-gray-800 dark:text-white mb-6">About Me</h1>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-justify">
           <p> I am a motivated and detail-oriented <span className="font-semibold">Frontend Developer</span>, skilled in creating fast and user-friendly web applications using <span className="font-semibold">React.js</span> and <span className="font-semibold">Tailwind CSS</span>. I started my programming journey enthusiastically with small projects and gradually learned to build complex websites and applications. </p> <p> I enjoy implementing new ideas, optimizing performance, and ensuring a smooth user experience across all devices. My work style involves writing clean code, creating responsive designs, and solving problems through teamwork. </p> <p> Outside of programming, I love sports, especially playing cricket, and I am also interested in painting whenever I get time. These hobbies broaden my thinking and help reduce work-related stress. </p> <p> I am a patient, creative, and always open to learning new things. I enjoy taking risks when facing challenges and am passionate about finding solutions to any problem. </p>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="flex-1 w-full flex justify-center items-center">
          <Lottie animationData={aboutLottie} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default About;
