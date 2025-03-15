import axios from 'axios';
import React, { useState } from 'react';
import ConfirmModal from '../../Components/ConfirmModal';
import { MdDeleteSweep } from "react-icons/md";

export default function UserCard({ user, setToggleAccess, filterOGData }) {

  const [isDelete, setIsDelete] = useState(false);

  const revokeAccess = async () => {
    try {
      await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/revoke-access?user=${user._id}`, { token: localStorage.getItem('token') });
      user.isAdmin = false;
      setToggleAccess((prev) => !prev);
      flash('Access Revoked Successfully', 'Success');
    } catch (e) {
      console.error(e)
      flash('Something went wrong !! Please try again later', 'Error');
    }
  }

  const grantAccess = async () => {
    try {
      await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/grant-access?user=${user._id}`, { token: localStorage.getItem('token') });
      user.isAdmin = true;
      setToggleAccess((prev) => !prev);
      flash('Access Granted Successfully', 'Success');
    } catch (e) {
      console.error(e)
      flash('Something went wrong !! Please try again later', 'Error');
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteUser = async () => {
    try {
      await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/delete-user?user=${user._id}`, { token: localStorage.getItem('token') });
      filterOGData(user._id);
      flash('User Deleted Successfully', 'Success');
    } catch (e) {
      flash('Something went wrong !! Please try again later', 'Error');
      console.error(e)
    }

    setIsDelete(false)
  }

  // Function to delete items when the confirmation window is closed
  const handleClose = () => {
    if (isDelete) deleteUser();
    else user.isAdmin ? revokeAccess() : grantAccess();
    setIsModalOpen(false);
  }

  return (
    <div
      className="relative bg-gradient-to-b from-[#b6d4ff] to-[#c6e7ff] min-w-80 w-auto rounded-3xl overflow-hidden shadow-md p-6 transition duration-500 hover:shadow-xl">

      <p className='p-semibold text-lg'>{user.fullName}</p>
      <p className='p-regular text-sm'>{user.email}</p>

      {
        user.isAdmin && (
          <span className='absolute top-0 right-0 bg-red-500 text-white text-sm p-medium px-5 py-1 rounded-tr-3xl rounded-bl-3xl'>Admin</span>
        )
      }

      <div className="flex justify-between mt-4">
        <button
          className='px-5 py-2 bg-[#1C4476] transition duration-300 hover:bg-[#1C4476]/70 text-white rounded-full '
          onClick={() => {
            setIsDelete(true);
            setIsModalOpen(true);
          }}>
          <MdDeleteSweep size={25} />
        </button>
        <button
          // onClick={user.isAdmin ? revokeAccess : grantAccess}
          onClick={() => { setIsModalOpen(true) }}
          className='cta-btn'>
          {user.isAdmin ? "Revoke Access" : "Promote to Admin"}
        </button>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="relative z-[100]">
          <ConfirmModal
            onRemove={handleClose}
            onClose={() => {
              setIsModalOpen(false);
              setIsDelete(false);
            }}
          />
        </div>
      )}
    </div>
  )
}
