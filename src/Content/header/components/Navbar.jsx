import React from "react";

import { Link, NavLink } from "react-router-dom";

export default function Navbar({isOpen, toggleMenu}) {

  const linkStyles = ({ isActive }) =>
    `font-semibold   transition-all duration-300 ${
      isActive ? " text-[#202A44] border-b-2 border-[#202A44]" : "hover:text-gray-600 hover:-translate-y-1"
    }`;

  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink
          className={linkStyles}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={linkStyles}
          to={"/AboutUs"}
        >
          About
        </NavLink>
        <NavLink
          className={linkStyles}
          to={"/Services"}
        >
          Services
        </NavLink>        
        <NavLink
         className={linkStyles}
          to={"/Visa"}
        >
          Visa
        </NavLink>
        <NavLink
         className={linkStyles}
          to={"/Interview"}
        >
          Interview
        </NavLink>
        <NavLink
         className={linkStyles}
          to={"/FAQ"}
        >
          FAQs
        </NavLink>
        <NavLink
          className={linkStyles}
          to={"/Contact"}
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute transform bg-gray-100 shadow-lg top-20
        text-center right-0 z-10 md:hidden duration-1000 overflow-hidden ${
          isOpen ? "w-[100vw] " : "w-0"
        }`}
      >
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/"}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/AboutUs"}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/Services"}
          onClick={toggleMenu}
        >
          Services
        </Link>       
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/Visa"}
          onClick={toggleMenu}
        >
          Visa
        </Link>
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/Interview"}
          onClick={toggleMenu}
        >
          Interview
        </Link>
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/FAQ"}
          onClick={toggleMenu}
        >
          FAQs
        </Link>
        <Link
          className="block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300"
          to={"/Contact"}
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <div className="m-10">
          <Link to={"/Quote"} className="p-5 bg-[#202A44] text-white rounded-lg hover:bg-slate-300 hover:text-black duration-300" onClick={toggleMenu}>
            Book Slot
          </Link>
        </div>
      </div>
      {/* {isOpen && (
      )} */}
    </nav>
  );
}
