import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-700 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Your Tasks</li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import { FaEdit } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";
