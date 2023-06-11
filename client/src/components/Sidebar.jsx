import React from "react";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { sidebarConstant } from "../constants/sidebar";

const Sidebar = ({ handleItemClick, activeItem }) => {
  const [open, setOpen] = useState(true)
  function handelToggleClick(){
    return setOpen(!open)
  }
  
  return (
    <div className={`hidden md:flex flex-col justify-around ${open ? "w-[20%]" : "w-[5%]"} mt-16 border bg-white border-r-neutral-200 fixed top-0 left-0 h-[95%] z-10 `}>
        <BsFillArrowLeftCircleFill className="bg-white text-3xl border cursor-pointer rounded-full absolute -right-3 top-2" onClick={handelToggleClick} />

      <div className={`px-6 -mt-7 flex-col gap-4 ${open? ":flex": "hidden"}`}>
        {sidebarConstant.map((element) => (
          <Link
            to={element.path}
            className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${
              activeItem === element.name && "bg-gray-100"
            }`}
            onClick={() => handleItemClick(element.name)}
          >
            <element.icon size={20} />
            <p className="navbar-p">{element.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
