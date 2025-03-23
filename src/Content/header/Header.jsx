import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import LightMode from "./components/LightMode";
import MobileMenuToggle from "./components/MobileMenuToggle";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header stays fixed for tall pages */}
      <header className="flex justify-between items-center px-5 sm:px-20 py-8 bg-[--background-color-offset] gap-4 print:hidden w-full fixed top-0 z-20 shadow-lg shadow-[--shadow-color]">
        {/* Logo and Navbar */}
        <Link to={"/"} className="flex items-center gap-2 w-auto justify-between">
          <img className="h-5 object-contain" src="/images/home/logo-sb.png" alt="Logo" />
          <p className="text-sm nav-link-after">Soumil</p>          
        </Link>

        <div className="flex gap-5">
          <LightMode/>
          {/* Mobile Menu Icon */}
          <MobileMenuToggle isOpen={isOpen} onClick={toggleMenu}/>
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </header>
      {/* A dummy element so that body elements can stay centered in pages */}
      <div className="pt-[100px]"></div>
    </>
  );
}
