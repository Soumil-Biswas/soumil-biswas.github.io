import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header stays fixed for tall pages */}
      <header className="flex justify-between items-center px-20 py-8 bg-[--background-color-offset] gap-4 print:hidden w-full fixed top-0 z-20 shadow-lg shadow-[--shadow-color]">
        {/* Logo and Navbar */}
        <Link to={"/"} className="flex items-center md:gap-2 w-full md:w-auto justify-between">
          <img className="h-5 object-contain" src="/images/home/logo-sb.png" alt="Logo" />
          <p className="text-sm nav-link-after">Soumil</p>          
        </Link>

        <div className="flex gap-2">
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
          {/* Mobile Menu Icon */}
          <button
            className="right-4 items-center  md:hidden flex justify-end cursor-pointer text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>
      {/* A dummy element so that body elements can stay centered in pages */}
      <div className="pt-[100px]"></div>
    </>
  );
}
