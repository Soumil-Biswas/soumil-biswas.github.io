import React from "react";

export default function ConfirmModal({ onRemove, onClose }) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
        <h2 className="text-xl p-bold mb-2">Are You Sure?</h2>
        <p className="text-gray-600 text-sm">You really want proceed with the action ?</p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-6 py-2 rounded-full transition duration-300 hover:bg-red-600"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full transition duration-300 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
