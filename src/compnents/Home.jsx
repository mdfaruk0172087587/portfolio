import { FaDownload, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import image from '../assets/farukpik.jpg'
import { Typewriter } from "react-simple-typewriter";
import ShimmerBorder from "./ShimmerBorder";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <section
      className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10  px-4 md:px-8 lg:px-16 lg:mt-16 mt-10"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
          Hi, I’m <span className="text-blue-600">Omar Faruk</span>
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-black mt-3">
          And I'm a <span className=' bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
            <Typewriter
              words={['Web Developer']}
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
          I am a Passionate Web Developer skilled in building modern, responsive, and user-friendly websites. Experienced in frontend design, web app development, and creative UI/UX solutions......
        </p>
        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-blue-600">
          <SocialLinks></SocialLinks>
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
            src={image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

  );
};

export default Home;
