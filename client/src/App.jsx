import React, { useState } from "react";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import "./components/dark.css"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);;
  };

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  

  return (
    <div className="App">
      <MainLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex-1 md:ml-[20%] mt-14 p-10 overflow-y-auto">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={React.cloneElement(route.element, { isDarkMode })} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
