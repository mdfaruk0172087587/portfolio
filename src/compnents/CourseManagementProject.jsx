import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Autoplay } from "swiper/modules";

const images = [
    "https://i.ibb.co.com/G4fCTNXG/coruse5.png",
    "https://i.ibb.co.com/Gv1xLxZ4/coruse4.png",
    "https://i.ibb.co.com/ynkpGYgD/coruse3.png",
    "https://i.ibb.co.com/rf6XXbGP/coruse2.png",
];

const techLogos = {
    React: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "Node.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    Express: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    MongoDB: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
};

const CourseManagementProject = () => {
    const project = {
        name: "Course Management System",
        mainTech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        description:
            "This project is for educational institutions or online training centers to easily create, edit, and manage courses. Teachers can add courses, and students can enroll with ease.",
        liveLink: "https://poetic-seahorse-95884c.netlify.app/",
        githubClient: "https://github.com/mdfaruk0172087587/CourseManagement",
        challenges:
            "Managing course enrollment limits and providing a simple user experience were the main challenges. Additionally, careful handling of data updates and role-based access control was necessary.",
        futurePlans:
            "Admin panel development, payment gateway integration, and adding a real-time notification system.",
    };

    return (
        <div className="my-5">
            {/* Carousel */}
            <div className="mb-6">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={`Slide ${idx + 1}`}
                                className=" shadow-md object-cover w-full"
                                style={{ maxHeight: "400px", minHeight: "350px" }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="max-w-[81%] mx-auto">
                {/* Description and challenges/future plans in two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                    <h1 className="text-xl font-medium mb-6 text-gray-800">{project.name}</h1>
                    <p className="mb-6 text-gray-700">{project.description}</p>

                    <h2 className="text-lg font-semibold mb-2 text-gray-800">Challenges faced</h2>
                    <p className="text-gray-700">{project.challenges}</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">Future plans</h2>
                    <p className="text-gray-700 mb-6">{project.futurePlans}</p>

                    <h2 className="text-lg font-semibold mb-2 text-gray-800">Main Technology Stack</h2>
                    <div className="flex flex-wrap gap-4">
                        {project.mainTech.map((tech) => (
                            <div
                                key={tech}
                                className="flex flex-col items-center w-20 bg-white rounded-lg shadow p-2"
                            >
                                <img
                                    src={techLogos[tech]}
                                    alt={tech}
                                    className="w-10 h-10 object-contain mb-1"
                                />
                                <span className="text-gray-700 text-sm text-center">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Buttons with react icons */}
            <div className="md:w-1/2 mx-auto flex flex-col sm:flex-row gap-4 mt-8">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 flex items-center justify-center gap-2 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                >
                    View Live Link <FiExternalLink size={20} />
                </a>
                <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 flex items-center justify-center gap-2 text-white px-6 py-3 rounded hover:bg-gray-900 transition"
                >
                    GitHub (Client) Code <FiGithub size={20} />
                </a>
            </div>
            </div>
        </div>
    );
};

export default CourseManagementProject;
