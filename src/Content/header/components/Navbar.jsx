import React from "react";
import navlinks from "./navlinks";
import MobileMenuToggle from "./MobileMenuToggle";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({isOpen, toggleMenu}) {

  const linkStyles = ({ isActive }) =>
    `nav-link-after ${
      isActive ? "after:w-full" : "hover:after:w-full"
    }`;

  const mobileLinkStyles = () =>
    "nav-link-after text-left";

  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-6 items-center">
        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            className={linkStyles}
            to={link.to}
          >
            {link.name}
          </NavLink>          
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute transform bg-[--background-color-offset] shadow-side top-0 right-0 z-20 md:hidden duration-1000 overflow-hidden min-h-screen flex flex-col gap-5 py-10 ${
          isOpen ? "w-[50vw] max-w-[300px] shadow-[--shadow-color] px-10" : "w-0 shadow-transparent"
        }`}
      >
        <div className="self-end">
          <MobileMenuToggle isOpen={isOpen} onClick={toggleMenu}/>
        </div>
        {navlinks.map((link, index) => (
          <Link
            key={index}
            className={mobileLinkStyles()}
            to={link.to}
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
