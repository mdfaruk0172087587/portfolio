import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AllProject = () => {
  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ['allProject'],
    queryFn: async () => {
      const res = await axios.get('https://portfolio-server-kappa-roan.vercel.app/projects');
      return res.data;
    },
  });

  if (isLoading)
    return <p className="text-center text-lg mt-10 animate-pulse">⏳ Loading projects...</p>;

  if (isError)
    return (
      <p className="text-center text-red-500 mt-10">
        ❌ Failed to load projects. Please try again later.
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        All Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-1"
            >
              {/* Project Info */}
              <div className="flex-1 mb-3 md:mb-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600">
                  {project.description?.length > 120
                    ? project.description.slice(0, 120) + "..."
                    : project.description}
                </p>
              </div>

              {/* Link */}
              <a
                href={project.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 md:mt-0 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md font-medium"
              >
                Live Preview
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProject;
