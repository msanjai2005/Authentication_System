import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full bg-gray-100">

      {/* Safe Navbar render */}
      <Navbar />

      <div className="flex flex-row">
        <div className="w-full min-h-[90vh]">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Layout;
