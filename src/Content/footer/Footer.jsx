import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import FooterLink from "./components/FooterLink";

const Footer = () => {

  // console.log(location)
  const contacts = [
    {
      name:"email",
      icon:"/images/logos/logo-gmail.png",
      detail:"soumil.biswas19@gmail.com",
    },
    {
      name:"email2",
      icon:"/images/logos/logo-microsoft.png",
      detail:"soumil.biswas19@hotmail.com",
    },
    {
      name:"website",
      icon:"/images/logos/logo-sb.png",
      hoverIcon:"/images/logos/logo-sb-inverted.png",
      url: "/",
    },
    {
      name:"youTube",
      icon:"/images/logos/logo-youtube.png",
      hoverIcon:"/images/logos/logo-youtube-inverted.png",
      url: "https://www.youtube.com/@soumilbiswas1841",
    },
    {
      name:"DVDR",
      icon:"/images/logos/logo.png",
      hoverIcon:"/images/logos/logo-inverted.png",
      url: "https://soumil-biswas-web.github.io/DVDR/",
    },   
    {
      name:"facebook",
      icon:"/images/logos/logo-facebook.png",
      hoverIcon:"/images/logos/logo-facebook-inverted.png",
      url: "https://www.facebook.com/soumil.biswas.1",
    },
    {
      name:"linkedIn",
      icon:"/images/logos/logo-linkedin.png",
      hoverIcon:"/images/logos/logo-linkedin-inverted.png",
      url: "https://www.linkedin.com/in/soumil-biswas-254206246/",
    },
    {
      name:"gitHub",
      icon:"/images/logos/logo-github.png",
      hoverIcon:"/images/logos/logo-github-inverted.png",
      url: "/Programming",
    },
  ];

  return (
    <footer className="bg-[--background-color-offset] print:hidden w-full border-t-2 border-transparent //dark:border-[--contrast-color]">
      <div className="magic-center justify-center p-12 gap-5">
        <div className="grid grid-cols-2 place-items-center w-full">
          <div className="flex flex-col">
            {contacts.map((contact, index) => {
              if (contact.name.includes("email")) {
                return (
                  <div key={index} className="flex gap-5">
                    <img className="w-5 object-contain" src={contact.icon} alt={contact.name} />
                    <p>{contact.detail}</p>
                  </div>
                )
              }
            })}
          </div>

          <div className="flex items-center gap-10">
            {contacts.map((contact, index) => {
                if (!contact.name.includes("email")) {
                  return (
                    <FooterLink key={index} contact={contact} />
                  )
              }
            })}
          </div>
        </div>

        {/* copyright part */}
        <p className="text-center">© All Copyright 2025 by Soumil Biswas</p>
      </div>
    </footer>
  );
};

export default Footer;
