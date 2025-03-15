import React from 'react';
import { MdDeleteSweep } from "react-icons/md";

const Card = ({ userData, onRemove }) => {
  return (
    <div
      className="bg-gradient-to-b from-[#b6d4ff] to-[#c6e7ff] flex flex-col justify-between min-w-80 w-auto rounded-3xl overflow-hidden shadow-md p-6 transition duration-500 hover:shadow-xl"

    >
      {/* <h3 className="text-lg font-bold mb-2">{userData.userName}</h3> */}

      <div>
        {
          userData.email &&
          <p className="text-gray-700">
            <span className="font-semibold">Email: </span>
            {userData.email}
          </p>
        }
      </div>

      <div className="space-y-1 flex justify-end items-end mt-5">
        {
          onRemove &&
          <button
            className='px-5 py-2 bg-[#1C4476] hover:bg-[#1C4476]/70 text-white rounded-full '
            onClick={onRemove}
          >
            <MdDeleteSweep size={25} />
          </button>
        }
      </div>



    </div>
  )
}

export default Card
