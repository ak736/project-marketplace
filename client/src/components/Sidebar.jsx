import React from "react";
import { Link } from "react-router-dom";
import { sidebarConstant } from "../constants/sidebar";

const Sidebar = ({ handleItemClick, activeItem }) => {
  return (
    <div className="w-full h-[10vh] bottom-0 md:flex flex-col justify-around items-stretch md:w-[20%] mt-16 border bg-white border-r-neutral-200 fixed md:top-0 left-0 md:h-[95%] z-10">
      <div className="px-6 md:-mt-7 flex md:flex-col gap-4 z-10 justify-around h-[10vh]">
        {sidebarConstant.map((element) => (
          <Link
            to={element.path}
            className={`flex items-center lg:justify-start justify-center gap-2 py-4 px-6 md:px-2 rounded-lg lg:pl-4 cursor-pointer hover:bg-gray-100 ${
              activeItem === element.name && "bg-gray-100"
            }`}
            onClick={() => handleItemClick(element.name)}
          >
            <element.icon size={20} />
            <p className="hidden lg:block">{element.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
