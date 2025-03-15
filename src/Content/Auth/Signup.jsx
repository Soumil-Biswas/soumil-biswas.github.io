import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { togglePassword } from "../../Store/Auth/passwordSlice";
import { FcOk } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must have at least one uppercase letter")
      .matches(/[a-z]/, "Password must have at least one lowercase letter")
      .matches(/\d/, "Password must have at least one number")
      .matches(
        /[!@#$&*?]/,
        "Password must have at least one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const password = watch("password", "");
  const passRules = {
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasSpecialChar: /[!@#$&*?]/.test(password),
    hasNumber: /[\d]/.test(password),
  };

  const navigate = useNavigate();
  const showPassword = useSelector((state) => state.passwordReducer[1]);
  const showConfirmPassword = useSelector((state) => state.passwordReducer[2]);
  const dispatch = useDispatch();

  const onSubmit = async (data, event) => {
    try {
      event.preventDefault();
      await axios.post(
        `${import.meta.env.REACT_SERVER_URL}/visa/admin/signup`,
        data
      );
      flash("A confirmation email has been sent! Please check your inbox and verify your email.", "Success");
      navigate("/");
    } catch (e) {
      const { status = 500, message = "Something went wrong !!" } =
        e.response?.data;
      flash(message, "Error");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#C6E7FF] to-[#A2BBFF] min-h-screen py-28 w-full">
      <div className="w-[90vw] max-w-2xl m-auto bg-white p-8 rounded-2xl">
        <h1 className="p-bold text-3xl text-[#000D44] mb-8">Sign up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm p-medium text-[#4670FE]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: true })}
              placeholder="Full Name"
              className={`mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 ${
                errors.fullName ? "border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">Full Name is required</p>
            )}
          </div>

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
              className={`mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm p-medium text-[#4670FE]"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className={`mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />

              <span
                onClick={() => dispatch(togglePassword(1))}
                className="absolute top-1/2 -translate-y-1/2 right-0 text-xl"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>

            {errors.password && (
              <>
                <div className="flex flex-col gap-2 p-5">
                  <p
                    className={`flex gap-1 items-center ${
                      passRules.hasUpperCase ? "text-black" : "text-gray-400"
                    }`}
                  >
                    Uppercase
                    {passRules.hasUpperCase ? (
                      <FcOk />
                    ) : (
                      <span className="p-1 text-red-500">
                        <IoCloseOutline />
                      </span>
                    )}
                  </p>

                  <p
                    className={`flex gap-1 items-center ${
                      passRules.hasLowerCase ? "text-black" : "text-gray-400"
                    }`}
                  >
                    Lowercase
                    {passRules.hasLowerCase ? (
                      <FcOk />
                    ) : (
                      <span className="p-1 text-red-500">
                        <IoCloseOutline />
                      </span>
                    )}
                  </p>

                  <p
                    className={`flex gap-1 items-center ${
                      passRules.hasNumber ? "text-black" : "text-gray-400"
                    }`}
                  >
                    Number
                    {passRules.hasNumber ? (
                      <FcOk />
                    ) : (
                      <span className="p-1 text-red-500">
                        <IoCloseOutline />
                      </span>
                    )}
                  </p>

                  <p
                    className={`flex gap-1 items-center ${
                      passRules.hasSpecialChar ? "text-black" : "text-gray-400"
                    }`}
                  >
                    Special character
                    {passRules.hasSpecialChar ? (
                      <FcOk />
                    ) : (
                      <span className="p-1 text-red-500">
                        <IoCloseOutline />
                      </span>
                    )}
                  </p>
                </div>
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              </>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm p-medium text-[#4670FE]"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
                className={`mt-1 w-full outline-none border-b border-black/30 focus:border-black py-2 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />

              <span
                onClick={() => dispatch(togglePassword(2))}
                className="absolute top-1/2 -translate-y-1/2 right-0 text-xl"
              >
                {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            className="bg-black text-white py-2 mt-6 w-full rounded-full text-lg"
            type="submit"
          >
            Sign up
          </button>
        </form>

        <div className="text-center mt-4 text-sm md:text-base">
          <p>
            Already have an account ?&nbsp;
            <Link className="underline text-blue-500 select-none" to={"/login"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
