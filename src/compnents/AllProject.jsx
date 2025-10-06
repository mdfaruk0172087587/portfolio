import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import DisplayProject from './DisplayProject';
import Pagination from './Pagination ';

const AllProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['allProject', currentPage],
    queryFn: async () => {
      const res = await axios.get(`https://portfolio-server-kappa-roan.vercel.app/projects?page${currentPage}`);
      
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
    const totalPages= data.totalPages || 1;

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        All Projects
      </h1>

      {data.projects?.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data.projects?.map(singleProject => <DisplayProject key={singleProject._id} singleProject={singleProject}></DisplayProject>)
        }
       </div>
      )}
      <Pagination
      pageCount={totalPages}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      >

      </Pagination>
    </div>
  );
};

export default AllProject;
