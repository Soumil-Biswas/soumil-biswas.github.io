import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const UserDetails = ({ onClose, isModal, handleCheckout }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (isModal) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isModal]);


  const onSubmit = (data) => {
    handleCheckout(data)
    if (onClose) onClose();
  };


  if (!isModal && !isVisible) return null
  return (
    <div className="fixed inset-0 z-[101] bg-black bg-opacity-50 flex items-end md:items-center justify-center ">

      <div className={`bg-white md:rounded-3xl shadow-md w-full h-3.5/5 md:h-auto max-w-2xl relative py-10 md:px-16 px-5 transform transition-all duration-1000 ${isModal ? " translate-x-0 opacity-100" : "-translate-x-full  opacity-0"}`}>
        {/* modal close button */}
        <button
          className="absolute top-4 right-5 text-gray-600 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label className="block  font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="mt-1 mb-3 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#5b80b0]"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block  font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
              className="mt-1 mb-3 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#5b80b0]"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              {...register("mobileNumber", {
                required: "Mobile Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Mobile Number must be 10 digits"
                }
              })}
              className="mt-1 mb-3 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#5b80b0]"
              placeholder="Enter your mobile number"
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>

          {/* Pay Now Button */}
          <button
            type="submit"
            className="w-full bg-[#105A88] hover:bg-[#1576AF]  duration-300 text-white py-2 rounded-md font-bold md:text-xl text-base "
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserDetails
