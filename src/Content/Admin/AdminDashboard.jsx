import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet, useLocation, redirect } from 'react-router-dom';
import axios from "axios";
import { TfiLayoutSidebarLeft } from "react-icons/tfi";

const AdminDashboard = () => {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="min-h-screen text-[#1C4476] flex relative w-full">

      {/* mobile sidebar */}
      <div className={`lg:hidden bg-white fixed left-0 w-full h-screen pb-24 z-50 transform transition-transform duration-300 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar setSidebar={setSidebar} />
      </div>

      {/* desktop sidebar */}
      <div className="w-1/4 m-4 mr-0 shrink-0 hidden lg:block">
        <div className="rounded-2xl border border-black/30 bg-white shadow-xl h-[80vh] overflow-y-auto fixed w-1/4">
          <Sidebar setSidebar={setSidebar} />
        </div>
      </div>

      <div className="grow">
        <div className="lg:hidden bg-white w-full px-5 py-6 fixed z-10">
          <button className="cta-btn" onClick={() => setSidebar(true)}> <TfiLayoutSidebarLeft /> Admin Navigation</button>
        </div>

        <div className="px-6 md:px-10 py-8 pt-24 lg:pt-8">
          {
            (location.pathname === "/admin" || location.pathname === "/admin/") ?
              <h1 className="lg:text-2xl p-semibold text-center mt-[30vh]">Welcome to Admin Dashboard</h1>
              :
              <Outlet />
          }
        </div>

      </div>
    </div>
  );
};

AdminDashboard.loader = async () => {
  try {
    const response = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/isAuthorized`, { token: localStorage.getItem('token') });
    if (response.data) return null;
  } catch (e) { console.error(e) }

  flash("Only Admins can access this page", "Restricted");
  return redirect("/login");
}

export default AdminDashboard;
