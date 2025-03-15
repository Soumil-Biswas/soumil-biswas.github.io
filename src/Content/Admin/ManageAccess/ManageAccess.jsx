import React, { useEffect, useState } from 'react'
import UserCard from './Components/UserCard';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

function ManageAccess() {

    const result = useLoaderData() || [];

    const [OGdata, setOGData] = useState(result);
    const [data, setData] = useState(OGdata);
    const [toggleAccess, setToggleAccess] = useState(true);
    const [selected, setSelected] = useState(0);

    useEffect(() => { tabs[selected].function() }, [OGdata])

    const filterOGData = (id) => setOGData(prevOGdata => prevOGdata.filter(user => user._id !== id));

    const tabs = [
        {
            name: "All Users",
            function: () => {
                setData(OGdata);
                setSelected(0);
            },
        },
        {
            name: "Admins",
            function: () => {
                setData(OGdata.filter((user) => user.isAdmin));
                setSelected(1);
            },
        },
        // {
        //     name: "Super Admins",
        //     function: () => {
        //         setData(OGdata.filter((user) => (user.isSuperAdmin === "true")));
        //         setSelected(2);
        //     },
        // },
        {
            name: "Non-Admins",
            function: () => {
                setData(OGdata.filter((user) => !user.isAdmin));
                setSelected(2);
            },
        },
    ];

    return (
        <>
            <h2 className="text-4xl as-semibold mb-4">Manage Access</h2>

            <div className='flex mb-6 gap-4'>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`p-medium py-2 text-sm md:text-base px-4 rounded-full transition duration-150 ease-in-out border-2 border-[#1C4476] ${selected === index
                            ? 'bg-[#1C4476] text-white'
                            : 'hover:bg-[#1C4476]/70 hover:border-[#607C9F] hover:text-white'
                            }`}
                        onClick={tab.function}
                    >{tab.name}</button>
                ))}

            </div>

            {
                data.length > 0 ?
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3 gap-4'>
                        {data.map((user, index) => (<UserCard user={user} key={index} setToggleAccess={setToggleAccess} filterOGData={filterOGData} />))}
                    </div>
                    :
                    <h1 className='text-lg md:text-2xl text-slate-400 p-semibold text-center mt-40'>No Users Found</h1>
            }
        </>
    )
}

ManageAccess.loader = async () => {
    try {
        const { data } = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/get-all-users`, { token: localStorage.getItem('token') });
        return data
    } catch (e) {
        console.error(e)
    }
}

export default ManageAccess;