import React, { useEffect } from "react";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from './services/projects/DarkModeSlice';

function App() {
  const isDarkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  

  return (
    <div className={`App ${isDarkMode ? "dark" : ""} transition-transform duration-75`}>
      <MainLayout />

      <div className={`flex-1 md:ml-[20%] mt-14 p-10 overflow-y-auto ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
