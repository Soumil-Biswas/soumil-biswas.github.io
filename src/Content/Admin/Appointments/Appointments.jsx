import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Appointments() {
    return (
        <>
            <h2 className="text-4xl as-semibold mb-4">All Appointments</h2>

            <div className='flex mb-6 gap-4'>
                {["Success", "Pending"].map((tab, index) => (
                    <NavLink
                        key={index}
                        to={`/admin/appointments/${tab.toLowerCase()}`}
                        className={({ isActive }) =>
                            `p-medium py-2 text-sm md:text-base px-4 rounded-full p-semibold transition duration-150 ease-in-out border-2 border-[#1C4476] ${isActive ? 'bg-[#1C4476] text-white'
                                : 'hover:bg-[#1C4476]/70 hover:border-[#607C9F] hover:text-white'
                            }`
                        }
                    >
                        {tab}
                    </NavLink>
                ))}
            </div>

            <Outlet />
        </>
    )
}

export default Appointments;