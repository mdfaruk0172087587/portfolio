import axios from 'axios';
import React from 'react';

const AddProject = () => {

    const handleProject =async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const url = e.target.url.value;
        const post = {
            name,
            url,
            description
        }
        try{
            const res = await axios.post('https://portfolio-server-kappa-roan.vercel.app/projects', post);
            if(res.data.insertedId){
              alert('post success')
              e.target.reset();
            }
            
        }
        catch (err){
            alert('post not success', err)
        }
    }
    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
    Add Project
  </h2>
  <form onSubmit={handleProject} className="space-y-4">
    {/* name Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Project Name
      </label>
      <input
        type="text"
        name='name'
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Project Name"
      />
    </div>
    {/* description Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Project Description
      </label>
      <textarea
        type="text"
         rows={4}
        name='description'
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="description"
      />
    </div>
    {/* live link Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Live Link
      </label>
      <input
        type="url"
        name='url'
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Live link"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 font-medium mt-4"
    >
      Submit
    </button>
  </form>
</div>

    );
};

export default AddProject;