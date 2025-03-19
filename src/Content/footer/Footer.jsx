import React from "react";
import navlinks from "../header/components/navlinks";
import FooterLink from "./components/FooterLink";
import { Link } from "react-router-dom";
import clipBoard from "../contact/components/clipBoard";

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
    <footer className="bg-[--background-color-offset] print:hidden w-full border-t-2 border-transparent dark:border-[--contrast-color]">
      <div className="magic-center justify-center px-16 py-5 gap-10">
        <div className="grid grid-cols-2 place-items-center w-full">
        <div className="flex flex-col">
          {navlinks.map((link, index) => (
            <Link key={index} to={link.to} className="hover:-translate-x-1 duration-300" >{link.name}</Link> 
          ))}
        </div>

          <div className="flex flex-col gap-3">
            {contacts.map((contact, index) => {
              if (contact.name.includes("email")) {
                return (
                  <button 
                    onClick={() => clipBoard(contact.detail)}
                    key={index} 
                    className="flex gap-2 items-center leading-none"
                  >
                    <img className="w-5 object-contain" src={contact.icon} alt={contact.name} />
                    <p>{contact.detail}</p>
                  </button>
                )
              }
            })}
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
        </div>

        {/* copyright part */}
        <p className="text-center">© All Copyright {new Date().getFullYear()} by Soumil Biswas</p>
      </div>
    </footer>
  );
};

export default Footer;
