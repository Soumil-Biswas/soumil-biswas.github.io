import React from "react";

import { Link, NavLink } from "react-router-dom";

export default function Navbar({isOpen, toggleMenu}) {

  const navlinks = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "Design",
      to: "/Design"
    },    
    {
      name: "Development",
      to: "/Development"
    },
    {
      name: "About",
      to: "/About"
    },
    {
      name: "Contact",
      to: "/Contact"
    },
  ]

  const linkStyles = ({ isActive }) =>
    `nav-link-after ${
      isActive ? "after:w-full" : "hover:after:w-full"
    }`;

  const mobileLinkStyles = () =>
    "block p-2 font-semibold hover:bg-gray-200 border-b-2 border-blue-950 duration-300";

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
        className={`absolute transform bg-gray-100 shadow-lg top-20
        text-center right-0 z-10 md:hidden duration-1000 overflow-hidden ${
          isOpen ? "w-[100vw] " : "w-0"
        }`}
      >
        {navlinks.map((link, index) => (
          <Link
            key={index}
            className={mobileLinkStyles}
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
