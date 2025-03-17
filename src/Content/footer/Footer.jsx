import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

const Footer = () => {

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
    <footer className={`bg-[--background-color-offset] relative print:hidden w-full`}>
      {/* copyright part */}

      <div className="justify-center p-6">
        <p className="text-center">© All Copyright 2025 by Soumil Biswas</p>
      </div>
    </footer>
  );
};

export default Footer;
