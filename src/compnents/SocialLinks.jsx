import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ShimmerBorder from "./ShimmerBorder";

const SocialLinks = () => {
  const links = [
    { href: "https://github.com/mdfaruk0172087587", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/omar-faruk8/", icon: <FaLinkedin /> },
    {
      href: "https://www.facebook.com/faruk5872a",
      icon: <FaFacebook />,
    },
  ];

  return (
    <div className="flex justify-center md:justify-start items-center gap-6 rounded-xl">
      {links.map(({ href, icon }, idx) => (
        <ShimmerBorder key={idx} borderWidth={3}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center  text-white rounded-full  transition-colors duration-300 text-xl"
            aria-label="social link"
          >
            {icon}
          </a>
        </ShimmerBorder>
      ))}
    </div>
  );
};

export default SocialLinks;
