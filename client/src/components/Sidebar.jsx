import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sidebarConstant } from '../constants/sidebar';

const Sidebar = ({ handleItemClick, activeItem }) => {
  const isDarkMode = useSelector(state => state.darkMode);

  return (
    <div className={`hidden md:flex flex-col justify-around w-[20%] mt-16 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-r-neutral-200'}  fixed top-0 left-0 h-[95%] z-10`}>
      <div className={`px-6 -mt-7 flex flex-col gap-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {sidebarConstant.map((element) => (
          <Link
            to={element.path}
            className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}  ${activeItem === element.name && isDarkMode && ' bg-gray-600'}  ${activeItem === element.name && !isDarkMode && ' bg-gray-100'}`}
            onClick={() => handleItemClick(element.name)}
          >
            <element.icon size={20} />
            <p>{element.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
