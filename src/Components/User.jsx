import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlinePower } from "react-icons/hi2";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/Auth';

function User() {
    const [open, setOpen] = useState(false);
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

            <ul className="flex flex-col justify-between h-[100svh] ft-regular capitalize text-lg px-4 pt-10 pb-4">

                <div>
                    <div className='flex items-center gap-4 border-b-[0.5px] pb-4'>
                        <FaUserCircle className='text-3xl text-slate-400' />
                        <p className='truncate'>{user?.fullName}</p>
                    </div>

                    <li className='border-b-[0.5px] py-3'>
                        <Link to="/">
                            My Applications
                        </Link>
                    </li>

                </div>

                <div>
                    {
                        user?.isAdmin &&
                        <li className='py-3'>
                            <Link className='flex items-center justify-between' to="/admin">
                                Admin Dashboard
                                <MdAdminPanelSettings className='text-2xl opacity-80' />
                            </Link>
                        </li>
                    }
                    <li className='py-3'>
                        <button
                            onClick={() => {
                                localStorage.removeItem('token');
                                setUser(null);
                                navigate("/");
                                flash("Logged out successfully");
                            }}
                            className='w-full flex items-center justify-between'>
                            Log out
                            <HiOutlinePower className='text-xl' />
                        </button>
                    </li>
                </div>

            </ul>

        </Box>
    );

    return (
        <div className="text-sm user-name">
            <button onClick={toggleDrawer(true)} className='flex items-center gap-3'>
                {user.fullName}
                {/* User's Full name */}
            </button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default User