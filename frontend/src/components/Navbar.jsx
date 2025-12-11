import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const url = context?.url;
  const userData = context?.userData;

  return (
    <div className="w-full bg-[#F9FAFB]">
      <header className="w-full fixed top-0 left-0 bg-white backdrop-blur-md shadow-sm border-b border-gray-200 z-100">
        <div className="w-full px-2 sm:px-30 h-[70px] flex justify-between items-center">
          
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex flex-row justify-center items-center cursor-pointer"
          >
            <img
              className="w-14"
              src={url || "/logo.png"}     // <-- fallback added
              alt="Taskify logo"
            />
            <h1 className="text-[clamp(1.4rem,3vw,2rem)] font-bold bg-linear-to-bl 
              from-blue-400 to-blue-900 bg-clip-text text-transparent">
              Auth System
            </h1>
          </div>

          {/* Profile Icon */}
          {userData?.name ? (
            <div
              onClick={() => navigate("/profile-settings")}
              className="w-10 h-10 bg-blue-800 rounded-full cursor-pointer 
                text-white text-3xl font-bold flex justify-center items-center"
            >
              {userData.name[0]}
            </div>
          ) : (
            <div className="w-11 h-11 bg-linear-to-bl from-blue-400 to-blue-900 
              rounded-full flex justify-center items-center cursor-pointer">
              <FaRegUser className="text-white text-2xl" />
            </div>
          )}
        </div>
      </header>

      {/* spacer div so content doesn't hide behind fixed navbar */}
      <div className="w-full h-[70px]"></div>
    </div>
  );
};

export default Navbar;
