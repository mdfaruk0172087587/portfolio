/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        name: "React",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
        name: "JavaScript",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    {
        name: "Node.js",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        name: "MongoDB",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
    },
    {
        name: "Express.js",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
    },
    {
        name: "Tailwind CSS",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
    }
];

const Skills = () => {
    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">My Skills</h1>
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
