import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

const DisplayProject = ({ singleProject }) => {
  const { name, description, url } = singleProject;

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-out rounded-2xl p-6">
  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <BsCodeSlash className="text-purple-600 text-3xl drop-shadow-md" />
    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
      {name}
    </h2>
  </div>

  {/* Description */}
  <div className="flex items-start gap-3 mb-5">
    <MdDescription className="text-cyan-500 text-2xl mt-1" />
    <p className="text-gray-700 leading-relaxed">
      {description.length > 160
        ? description.slice(0, 160) + "..."
        : description}
    </p>
  </div>

  {/* Visit Button */}
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:opacity-95 hover:scale-105 transition-all duration-300"
  >
    Visit Project <FaExternalLinkAlt className="text-sm" />
  </a>
</div>

  );
};

export default DisplayProject;
