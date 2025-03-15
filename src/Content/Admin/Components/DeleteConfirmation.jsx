import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

const DeleteConfirmation = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    alert("Deleted successfully");
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="absolute top-60 right-96 bg-[#c6e7ff] rounded-xl p-8">
      <span
        onClick={handleCancel}
        className="p-2 absolute top-5 right-5 font-normal text-xl cursor-pointer rounded-full hover:bg-[#b0cdff]"
      >
        <VscChromeClose />
      </span>
      <p className="h-44 w-[30rem] flex items-center justify-center text-lg font-normal">
        Are you sure you want to delete this job?
      </p>
      <form onSubmit={(e) => handleClose(e)}>
        <button className="absolute bottom-5 right-5 bg-red-600 px-4 py-2 rounded-md text-white font-normal flex justify-self-end">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteConfirmation;
