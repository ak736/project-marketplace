import React, { useState } from "react";
import MainNavBar from "../components/MainNavBar";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import Navsidecontext from "../context/Navsidecontext";

const MainLayout = ({}) => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
const context = useContext(Navsidecontext);

const {navside}  = context ;

  return (
    <>
      {(navside)?(<>
        <div className="fixed top-0 left-0 w-full z-10">
        <MainNavBar />
      </div>
      <div>
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      </>
      ):""}
      </>
  );
};

export default MainLayout;
