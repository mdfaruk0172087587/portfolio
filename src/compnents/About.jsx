import React from 'react';
import aboutLottie from '../assets/aboutLottee.json';
import Lottie from 'lottie-react';
const About = () => {
   const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;
  return (
    <div className='mt-16'>
      {/* mobile column, lg row */}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center px-5 md:px-8 lg:px-15 gap-8">
        {/* Lottie Animation */}
        <div className="flex-1 w-full flex justify-center items-center">
          <Lottie animationData={aboutLottie} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Text Section */}
       <div className="flex-1 ">
        <h1 className="text-3xl md:text-4xl font-medium my-4 tracking-wide text-black">
          Meet <span className='text-blue-400 font-semibold'>Faruk</span>
        </h1>

        {/* Short Intro */}
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          <span className="font-semibold">MERN Stack Developer 🚀</span> |
          <span className="font-semibold"> Forever Curious Learner 📚</span> |
          <span className="font-semibold"> Adventurous Soul 🌍</span> |
          <span className="font-semibold">
            {" "}
            Introvert with an Extroverted Heart |
          </span>
        </p>

        <div className="relative p-1 rounded-xl inline-block w-full max-w-md mx-auto">
          <style>{customCss}</style>

          {/* Shimmer border */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)`,
              animation: "shimmer-spin 3s linear infinite",
              mask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
              WebkitMask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
              filter: "blur(4px)",
            }}
          />

          {/* Card content */}
          <div className="relative bg-white rounded-xl p-6 space-y-3 text-gray-600">
            <p>
              Hey! I’m{" "}
              <span className="font-semibold ">Omar Faruk</span>, a
              passionate{" "}
              <span className="font-semibold">MERN stack developer</span> who
              loves turning ideas into digital experiences.
            </p>
            <p>
              Outside coding, I enjoy football, digital art, and music. I love
              solving problems and building projects that inspire.
            </p>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default About;
