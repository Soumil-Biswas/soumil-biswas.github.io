import React from "react";

import { NavLink } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../../Contexts/Auth";

const Sidebar = ({ setSidebar }) => {
  const { user } = useAuth()

  const options = [
    {
      name: "All Appointments",
      link: "/admin/appointments/success",
    },
    {
      name: "Subscribers",
      link: "/admin/subscribers",
    },
    // {
    //   name: "Manage Access",
    //   link: "/admin/manage-access",
    // }
  ];

  if (user?.isSuperAdmin) {
    options.push({
      name: "Manage Access",
      link: "/admin/manage-access",
    });
  }

  let visitorCount = 123450;

  return (
    <div className="p-4 flex flex-col h-full relative">

      <span className="lg:hidden text-end p-4">
        <button onClick={() => setSidebar(false)}>
          <RxCross2 className="text-2xl" />
        </button>
      </span>

      <h1 className="px-4 py-4 mb-8 text-xl bg-blue-100 rounded-full text-center">Dashboard</h1>


      <div data-lenis-prevent className="flex flex-col gap-2 overflow-y-auto">
        {
          options.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `p-semibold py-2 px-4 rounded-full transition duration-150 ease-in-out ${isActive ? 'bg-[#1C4476] text-white' : 'hover:bg-[#1C4476]/70 hover:text-white'}`
              }>
              {item.name}
            </NavLink>
          ))
        }
      </div>

      <p className="p-bold px-4 absolute bottom-4">{("Website Visits: " + visitorCount)}</p>

    </div>
  );
}

export default Sidebar;
