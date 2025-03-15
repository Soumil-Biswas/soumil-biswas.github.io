import gsap from "gsap";

import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";

const NewPart1 = ({ data }) => {
  const { title, details } = data;

  const section1Ref = useRef(null);

  useEffect(() => {
    const section1 = section1Ref.current;

    gsap.fromTo(
      section1.children,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <div
      ref={section1Ref}
      className="  flex md:flex-row flex-col-reverse gap-16 mt-16 items-center"
    >
      {/* left image section */}
      <div className="lg:w-6/12 md:w-7/12 w-full ">
        <div className="w-full aspect-w-16 aspect-h-9 rounded-l-[28px] overflow-hidden">
          <img
            src={"/services/3-39 1.webp"}
            className="w-full h-full object-cover"
            alt="Excited girl wearing headphones,looking at her laptop screen"
          />
        </div>
      </div>

      {/* right our services section */}
      <div className="bg-[#E9E9E9] px-5 py-3 rounded-xl">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center  mb-2">{title}</h2>

        {/* services list */}
        <ul>
          {details.map((detail, index) => {
            return (
              <Link
                key={index}
                to={detail.redirect}
                smooth={true}
                duration={2000}
                offset={-30}
              >
                <li className="bg-white cursor-pointer hover:bg-[#F0F4F8] rounded-lg shadow-md px-4 py-2 md:text-xl text-base font-semibold flex items-center gap-5 my-3">
                  {/* icon */}
                  <>
                    <img
                      src={"/services/icon.webp"}
                      alt="services-icon"
                      className="w-5 h-5"
                    />
                  </>
                  {/* list items */}
                  <>
                    <p>{detail.service}</p>
                  </>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewPart1;
