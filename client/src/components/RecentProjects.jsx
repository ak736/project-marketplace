import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { recentProjectsData } from '../mock/mockData';
import { MdOutlineAdd } from 'react-icons/md';

const RecentProjects = () => {
  const darkMode = useSelector((state) => state.darkMode); // Access the dark mode state from Redux

  return (
    <div className={`mt-10 border ${darkMode ? 'border-neutral-800' : 'border-neutral-300'} rounded-lg p-6`}>
      <div className="flex justify-between">
        <h2 className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Recent Projects</h2>
        <h2 className={`text-primary font-semibold cursor-pointer ${darkMode ? 'text-primary' : ''}`}>View all projects</h2>
      </div>
      <div className="flex mt-6 gap-4 justify-evenly flex-wrap">
        {recentProjectsData.map((project, index) => (
          <div key={index} className={` max-w-[190px] overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg`}>
            <img src="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWce0k5XmT0oYgy1xdoRsioH_u5A" alt="Thumbnail" className="rounded-lg object-cover" />
            <p className={`mt-2 truncate text-sm ${darkMode ? 'text-white' : ''}`}>{project.title}</p>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>Price: <span className="font-semibold">{project.price}</span></p>
          </div>
        ))}
        <div className={`flex flex-col items-center justify-center w-[190px] h-[107px] rounded-lg ${darkMode ? 'bg-blue-700' : 'bg-blue-100'} cursor-pointer`}>
          <MdOutlineAdd size={25} className={`border-2 rounded-md ${darkMode ? 'border-white' : 'border-blue-400'}`} color={darkMode ? 'white' : 'blue'} />
          <p className={`mt-2 text-sm ${darkMode ? 'text-white' : 'text-primary'} font-semibold`}>Add new Project</p>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
