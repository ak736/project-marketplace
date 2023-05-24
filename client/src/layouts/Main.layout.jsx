import React, { useState } from "react";
import MainNavBar from "../components/MainNavBar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({isDarkMode, toggleDarkMode}) => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <MainNavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      </div>
      <div>
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default MainLayout;
