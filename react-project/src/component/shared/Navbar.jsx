import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-5 bg-indigo-500 text-white py-4 px-4 ">
      <div>
        <a className="text-2xl">Logo</a>
      </div>
      <div className="flex gap-4 items-center px-4">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
