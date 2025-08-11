import React from "react";
import courseProject from "../assets/course-management.PNG";

const techLogos = {
    React: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "Node.js":
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    Express:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    MongoDB:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    "Tailwind CSS":
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
};

const CourseManagementProject = () => {
    const project = {
        name: "Course Management System",
        mainTech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        description:
            "একটি পূর্ণাঙ্গ কোর্স ম্যানেজমেন্ট সিস্টেম যেখানে ইউজাররা কোর্স অ্যাড, এডিট ও ডিলিট করতে পারেন এবং এনরোলমেন্ট ফিচার আছে।",
        liveLink: "https://poetic-seahorse-95884c.netlify.app/",
        githubClient: "https://github.com/mdfaruk0172087587/CourseManagement",
        challenges:
            "ইউজার অথেনটিকেশন ও রোল বেজড এক্সেস কন্ট্রোল ইমপ্লিমেন্ট করা, পাশাপাশি কোর্স এনরোলমেন্ট লজিক ম্যানেজ করা।",
        futurePlans:
            "অ্যাডমিন প্যানেল উন্নয়ন, পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং রিয়েলটাইম নোটিফিকেশন সিস্টেম যোগ করা।",
    };

    return (
        <div
            className="my-5 " >
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Course Project Details</h1>
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
                {/* Left side - Image */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        src={courseProject}
                        alt={project.name}
                        className="rounded-lg shadow-md object-cover w-full h-full"
                        style={{ maxHeight: "600px", minHeight: "350px" }}
                    />
                </div>

                {/* Right side - Content */}
                <div className="md:w-1/2 flex flex-col justify-start">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">{project.name}</h1>

                    <p className="mb-6 text-gray-700">{project.description}</p>

                    {/* Three features */}
                    <div className="space-y-6 mb-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                                ডেভেলপমেন্টে যে চ্যালেঞ্জ ছিল
                            </h2>
                            <p className="text-gray-700">{project.challenges}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                                ভবিষ্যতে উন্নয়নের পরিকল্পনা
                            </h2>
                            <p className="text-gray-700">{project.futurePlans}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                                মেইন টেকনোলজি স্ট্যাক
                            </h2>
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

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-center"
                        >
                            লাইভ লিঙ্ক দেখুন
                        </a>
                        <a
                            href={project.githubClient}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition text-center"
                        >
                            GitHub (Client) কোড
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseManagementProject;
