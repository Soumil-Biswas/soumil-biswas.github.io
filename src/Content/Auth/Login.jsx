import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Contexts/Auth";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { togglePassword } from "../../Store/Auth/passwordSlice";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { updateUser } = useAuth();
  const navigate = useNavigate();
  const showPassword = useSelector((state) => state.passwordReducer[0]);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.REACT_SERVER_URL}/visa/admin/login`,
        data
      );
      localStorage.setItem("token", response.data);
      updateUser();
      navigate(-1);
      flash("Logged in successfully");
    } catch (e) {
      const { status = 500, message = "Something went wrong !!" } =
        e.response?.data;
      flash(message, "Error");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#C6E7FF] to-[#A2BBFF] min-h-screen py-28 w-full ">
      <div className="w-[90vw] max-w-2xl m-auto bg-white p-8 rounded-2xl">
        <h1 className="p-bold text-3xl text-[#000D44] mb-8">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm p-medium text-[#4670FE]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className={`mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 ${errors.email ? "border-red-500" : ""
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1 text-sm">
              <label
                htmlFor="password"
                className="block text-sm p-medium text-[#4670FE]"
              >
                Password
              </label>
              <Link
                className="underline text-blue-500 select-none"
                to={"/forgot"}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className={`mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 ${errors.password ? "border-red-500" : ""
                  }`}
              />

              <span
                onClick={() => dispatch(togglePassword(0))}
                className="absolute top-1/2 -translate-y-1/2 right-0 text-xl"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          <button
            className="bg-black text-white py-2 mt-6 w-full rounded-full text-lg"
            type="submit"
          >
            Log in
          </button>
        </form>

        <div className="text-center mt-4 text-sm md:text-base">
          <p>
            Don't have an account ?&nbsp;
            <Link
              className="underline text-blue-500 select-none"
              to={"/signup"}
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
