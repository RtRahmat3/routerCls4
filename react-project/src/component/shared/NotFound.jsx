import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-indigo-500 h-screen w-full flex text-5xl font-bold items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-2xl">404</h1>
        <h1 className="text-2xl">Not Found.</h1>
        <Link to="/">
          <button className="bg-black text-white border-orange-600 border-2 ">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
