import React from "react";

const Header = () => (
  <div className="bg-gray-100 md:p-4 mb-10 flex md:justify-between gap-2 items-center mt-4 mr-4 rounded-lg">
    <input type="text" placeholder="Search" className=" rounded-full p-1" />
    <div className="md:text-xl text-sm ">Monday, 6th March</div>
  </div>
);

export default Header;
