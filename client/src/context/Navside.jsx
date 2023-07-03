import Navsidecontext from "./Navsidecontext";
import { useEffect, useState } from "react";

const Navside  = (props)=>{

    const [navside, setnavside] = useState(false);

    const navhandle = ()=>{
        console.log("running")
        setnavside(!navside);
    }

    return (
        <Navsidecontext.Provider value={{navside , navhandle}}>
            {props.children}
        </Navsidecontext.Provider>
    )

}

export default Navside;