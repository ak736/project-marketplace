import React from "react";
import Wave from "../../components/LandingFooter";
import Navsidecontext from "../../context/Navsidecontext";
import { useContext } from "react";
import { useEffect } from "react";
import { FcGoogle} from "react-icons/fc";
import logback from "../../assets/loginimg.jpg";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const context = useContext(Navsidecontext);
  const { navhandle } = context;

  const navigate = useNavigate();

  const handlelogin=()=>{
    navigate('/');
  }

  useEffect(() => {
    navhandle();
  }, []);

  return (
    <div className="flex">
      <div className=" mr-[200px] w-full flex gap-10 absolute left-0 top-0 bg-cover ">
        <div className="flex flex-col content-center ml-[60px] md:ml-[30px] md:mr-[90px]">
        <h1 className="text-2xl  font-semibold text-center mt-[50px]">Login to your account</h1>
        <p className="text-slate-600 text-lg font-medium text-center mt-4"> Please login with your credentials</p>
        <div className="flex justify-center mt-4">
        <a href="#" className="text-center hover:scale-105 transition-transform rounded-lg flex gap-2 text-lg border-2 w-fit p-2  "><FcGoogle className="mt-1"/> Login with Google</a>
        </div>
        <div className="flex justify-center mt-4">
        <div className="h-[2px] w-[100px] border-2 mt-3 mx-2 boder-solid"></div> or <div className="h-[2px] w-[100px] border-2 mt-3 mx-2 boder-solid"></div>
        </div>
        <div className="border-2 rounded-lg md:w-[450px] md:mt-10 md:ml-[50px] h-[300px] md:h-[300px]">
            <div className="flex flex-col p-4 px-6 gap-2">
            <label htmlFor="name">Email</label>
            <input type="text" placeholder="Email" width={20} className="p-2 rounded-lg border-2" />
            </div>
            <div className="flex flex-col p-4 px-6 gap-2">
            <label htmlFor="name">Password</label>
            <input type="password" placeholder="Password" width={20} className="p-2 rounded-lg border-2" />
            </div>
            <button className="rounded-lg py-2 mt-2 px-4 border-2 ml-6 hover:bg-blue-600 hover:text-white hover:scale-110 transition-transform" onClick={()=>handlelogin()}>Login</button>
        </div>
      </div>
      <div className="hidden w-full md:flex justify-center item-center">
        <div className="">
            <img src={logback} alt="img" width={800} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
