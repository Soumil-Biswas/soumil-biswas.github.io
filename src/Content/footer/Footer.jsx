import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

const Footer = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Email Address is required"),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver:
      yupResolver(
        validationSchema
      )
  });
  console.error(errors);

  const onSubmit = async (data) => {
    try {
      await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/newsletter/subscribe`, { email: data.email });
      flash("You've successfully subscribed to our newsletter!", "Success");
    } catch (error) {
      console.error(error);
    }
  }

  const location = useLocation()

  // console.log(location)
  const socialMedia = [
    {
      img: "/footer/Group 21.webp",
      url: "https://www.instagram.com/visa_sprint/profilecard/?igsh=MWxheGJxdDR3MzJocQ==",
    },
    {
      img: "/footer/icons8-whatsapp-48.webp",
      url: "https://chat.whatsapp.com/BydtI53ImsIK2FVWhDv9yI",
    },
    {
      img: "/footer/Group 24.webp",
      url: "https://www.linkedin.com/company/visa-sprint/posts/?feedView=all",
    },
    {
      img: "/footer/Group 22.webp",
      url: "https://www.facebook.com/share/1HQ8i6W7Nu/?mibextid=wwXIfr",
    },
    {
      img: "/contact/telegram.webp",
      url: "https://t.me/visa_slots_itdoubt",
    },
  ];

  return (
    <footer className={`text-white relative print:hidden w-full ${location.pathname.startsWith("/admin") ? "hidden" : ""}`}>
      <div className="bg-[#202A44]  md:flex  pt-10 relative md:pl-20 xs:p-16 pb-16 ">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="/footer/VectorFrame.webp"
          alt=""
        />
        <div className="relative items-center sm:items-center md:items-start z-10 flex flex-col lg: ">
          {/* Logo and Name */}
          <div className="flex  md:items-center lg:items-center  mb-2">
            <img
              className="h-36"
              src="/footer/VISA SPRINT (2).png"
              alt="company logo"
            />
          </div>
          <p className="text-balance font-bilbo text-2xl  mt-2 text-center  sm:mt-4  md:mt-2 md:mr-40 lg:text-left  ">
            Fast, efficient, and trusted visa solutions tailored for you.
          </p>

          {/* Socialmedia links */}
          <div className="flex md:justify-start  space-x-3 mt-6 ">
            {socialMedia.map((social, index) => (
              <div className="hover:bg-slate-100 p-2 rounded-lg " key={index}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img
                    className="cursor-pointer  h-6  "
                    src={social.img}
                    alt={"Social media ${index}"}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* pages links */}

        <div className="relative space-y-8 sm:space-y-2 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-20 lg:gap-14  mr-1 sm:mr-2 md:mr-16 lg:mr-40 pl-20 md:pl-2">
          <div className="flex flex-col pt-8 sm:pt-4 md:pt-3  space-y-1 text-start">
            <h3 className="text-xl font-bold mb-4 ">Explore</h3>
            <Link className="hover:text-blue-500" to={"/"}>
              Home
            </Link>
            <Link className="hover:text-blue-500" to={"/AboutUs"}>
              About
            </Link>
            <Link className="hover:text-blue-500" to={"/Services"}>
              Services
            </Link>
            <Link className="hover:text-blue-500" to={"/Visa"}>
              Visa
            </Link>
            <Link className="hover:text-blue-500" to={"/Interview"}>
              Interview
            </Link>
            <Link className="hover:text-blue-500" to={"/FAQ"}>
              FAQs
            </Link>
            <Link className="hover:text-blue-500" to={"/Contact"}>
              Contact
            </Link>
          </div>

          <div className="flex flex-col space-y-1 text-start">
            <h3 className="text-xl font-bold mb-4 ">Visa</h3>
            <Link className="hover:text-blue-500" to={"/visa/B1B2_Visa"}>
              B1/B2 Visa
            </Link>
            <Link className="hover:text-blue-500" to={"/visa/F1_Visa"}>
              F1 Visa
            </Link>
            <Link className="hover:text-blue-500" to={"/visa/H1B_Visa"}>
              H1B Visa
            </Link>
            <Link className="hover:text-blue-500" to={"/visa/J1_Visa"}>
              J1 Visa
            </Link>
            <Link className="hover:text-blue-500" to={"/visa/L1_Visa"}>
              L1 Visa
            </Link>
            <Link className="hover:text-blue-500" to={"/visa/K1_Visa"}>
              K1 Visa
            </Link>
          </div>

          <div className="flex flex-col space-y-2 text-start w-52">
            <h3 className="text-xl font-bold mb-2">Contact </h3>
            <p>contact@visasprint.itdoubt.com</p>
            <p className="">+91-8222891986</p>

            <div className="pt-6 space-y-2">
              <h2 className="text-2xl font-bold">Newsletter</h2>
              <p className="">Subscribe to our newsletter to stay updated</p>
              <form className="flex flex-row items-center relative" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center pl-4 absolute">
                  <MdEmail className="text-2xl text-gray-500" />
                </div>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      onChangeCapture={(e) => localStorage.setItem("email", e.target.value)}
                      placeholder="Enter your Email"
                      className="rounded-full pl-12 pr-8 py-1 w-52 border-4 border-gray-700 text-black bg-slate-300"
                    />
                  )}
                />
                {/* <input
                    type="email"
                    placeholder="Enter your Email"
                    className="rounded-full pl-12 pr-8 py-1 w-52 border-4 border-gray-700 text-black bg-slate-300"
                  /> */}
                <button
                  type="submit"
                  className="flex items-center justify-center border-2 border-black absolute ml-44 bg-red-500 rounded-full p-2 "
                >
                  <IoIosNotifications className="text-2xl text-black cursor-pointer" />
                </button>
                {errors.email?.message && (
                  <p className="text-red-500 text-sm">{errors.email?.message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* copyright part */}

      <div className="bg-[#192138] justify-center p-6">
        <h1 className="text-center">© All Copyright 2025 by visasprint</h1>
      </div>
    </footer>
  );
};

export default Footer;
