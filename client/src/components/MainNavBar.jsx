import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from '../services/projects/DarkModeSlice';
import UserLogo from "../assets/user.png";
import MetaMaskLogo from "../assets/l1.png";

const MainNavBar = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    // Load user's preferred theme from local storage
    
  }, [walletAddress, isLoggedIn]);

  

  // const toggleDarkMode = () => {
  //   dispatch(toggleDarkMode());
  // };

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsLoggedIn(true);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className={`flex justify-center h-16 px-10 py-6 ${darkMode ? "bg-gray-900 border-b-gray-800 border-gray-900 shadow-gray-800" : "bg-white"} shadow-md border`}>
      <div className="flex items-center justify-between w-full 2xl:max-w-6xl">
        <div className="flex items-center">
          <div className="mr-5">
            <img src={UserLogo} className="h-10 w-10" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className={`hidden md:block font-semibold mt-[-2px]  ${darkMode ? "text-white" : "text-black"}`}>
              {walletAddress && walletAddress.length > 0 ? walletAddress : "Guest User"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className={`focus:outline-none ${darkMode ? "text-white" : "text-gray-500"}`}
          >
            {darkMode ? (
              <div className="text-[1.6em]">☀️</div>
            ) : (
              <div className="text-[1.6rem]">🌙</div>
            )}
          </button>
          {walletAddress && walletAddress.length > 0 ? (
            <div
              onClick={connectWallet}
              className="flex items-center gap-2 border-2 border-blue-300 dark:border-blue-500 shadow-md px-4 py-1 rounded-md cursor-pointer"
            >
              <img src={MetaMaskLogo} alt="" className="h-8 w-8" />
              <p className="text-gray-500 dark:text-gray-300">Connected</p>
            </div>
          ) : (
            <div
              onClick={connectWallet}
              className="flex items-center gap-2 bg-primary dark:bg-primary-dark px-4 py-1 shadow-md rounded-md cursor-pointer"
            >
              <p className="text-white dark:text-gray-200">Login with</p>
              <img src={MetaMaskLogo} alt="" className="h-8 w-8" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
