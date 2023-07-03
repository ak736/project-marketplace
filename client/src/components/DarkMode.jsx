import { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    switch(theme){
      case 'dark': 
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case 'light' : 
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        break;
    }
   
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mx-2 mr-0">
      <button
        className="text-xm bg-green-200 p-3 rounded-2xl"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <BsSun/> : <BsMoonFill/>}
      </button>
    </div>
  );
}

export default App;
