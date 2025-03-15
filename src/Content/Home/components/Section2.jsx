import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section2 = ({ data }) => {
  return (
    <div className="relative z-10 flex md:flex-row flex-col shadow-lg items-center mx-3 lg:mx-20 xl:mx-60 rounded-3xl mt-28 mb-5 p-5 lg:gap-12 md:gap-5  bg-gray-50">
      <div>
      <h2 className="font-bold text-2xl lg:mt-0 mt-3 block md:hidden">{data.mainTitle}</h2>
        <img
          src={"/landing-page-home/1.webp"}
          alt=""
          className="lg:w-96 lg:h-[375px] object-cover rounded-3xl w-full "
        />
      </div>
      <div className="w-full">
        <h2 className="font-bold text-2xl lg:mt-0 mt-3 hidden md:block">{data.mainTitle}</h2>

        <ul className="mt-5">
          {data.details.map((detail, index) => (
            <Link
              key={index}
              to={detail.redirect}
              className="group border-b-2 mb-3 pb-3 duration-300 hover:bg-slate-200 hover:border-collapse hover:rounded-lg hover:p-2"
            >
              <h3 className="text-xl font-bold ">{detail.title}</h3>
              <div className="flex items-center justify-between gap-3 ">
                <p className="w-10/12  ">{detail.des}</p>
                <FaArrowAltCircleRight className="md:text-3xl text-3xl mr-5 group-hover:translate-x-2 duration-300 fill-[#AEAEAE] group-hover:fill-[#202A44]" />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section2;
