import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";
const Main = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Outlet />
      <div className="min-h-screen"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
