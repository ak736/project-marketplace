import React  from "react";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import Navside from "./context/Navside";
function App() {
  return (
    <div className="App">
      <Navside>
      <MainLayout />
      <div className="flex-1 md:ml-[20%] mt-14 p-10 overflow-y-auto">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      </Navside>
    </div>
  );
}

export default App;
