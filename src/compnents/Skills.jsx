/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
const skillsData = [
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Express.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Tailwind CSS",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Next.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "NextAuth.js",
    img: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  {
    name: "Firebase",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "JWT",
    img: "https://jwt.io/img/pic_logo.svg",
  },
  {
    name: "Git & GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "Context API",
    img: "https://cdn-icons-png.flaticon.com/512/906/906324.png"
  }
];

const Skills = () => {
    return (
        <div className="py-5">
            <h1 className="text-4xl lg:text-5xl font-medium text-center text-black mb-4">My Skills</h1>
             <p className="text-center mb-8 text-black max-w-xl mx-auto">
                Here are the technologies and tools I work with to create amazing digital experiences. atar bangla ki
            </p>
            <div className="max-w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition"
                        animate={{
                            scale: [1, 1.1, 1],
                            y: [0, -8, 0],
                            boxShadow: [
                                "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                "0px 12px 20px rgba(0, 0, 0, 0.25)",
                                "0px 4px 6px rgba(0, 0, 0, 0.1)"
                            ]
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: index * 0.2
                        }}
                    >
                        <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4" />
                        <h2 className="text-lg font-semibold text-gray-700">{skill.name}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
