import React, { useState } from "react";
import CTAButton from "./components/CTAButton";
import Navbar from "./components/Navbar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import User from "../../Components/User";
import { useAuth } from "../../Contexts/Auth";

export default function Header() {

  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-4  md:px-10 bg-gray-100 gap-4 print:hidden w-full fixed top-10 z-20">
      {/* Logo and Navbar */}
      <div className="flex items-center md:gap-6 w-full md:w-auto justify-between">
        <Link to={"/"}>
          <img className="h-20 object-contain" src="/footer/VISA SPRINT (3).png" alt="Logo" />
        </Link>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <div className="flex gap-2">
        {/* Contact button */}
        <button
          className=""
        >
          {/* {!user ? <Link to={'/login'} className="text-sm user-name pl-0"><FaCircleUser className="text-3xl" />Login/Signup</Link> : <User />} */}
          {user?.isAdmin && <User />}
        </button>

        {/* Call to Action Button */}
        <Link to="/Quote"><CTAButton text="Book Slot" onTop={true} /></Link>

        {/* Mobile Menu Icon */}
        <div
          className="right-4 items-center  md:hidden flex justify-end cursor-pointer text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </header>
  );
}
