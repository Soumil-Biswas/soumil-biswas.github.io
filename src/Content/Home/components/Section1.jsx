import React from "react";
import { Link } from "react-router-dom";

const Section1 = ({ data }) => {
  return (
    <div className=" ">
      <div className="flex md:flex-row flex-col items-center lg:gap-16 lg:mx-32 md:mx-10 mx-5 md:gap-10 gap-10 md:mt-10 mt-5">
        <h2 className="lg:text-3xl md:text-4xl text-2xl font-bold block md:hidden">
          {data.title}
        </h2>
        <div className="">
          <img src="/landing-page-home/Ellipse 14.webp" className="md:w-[1680px] w-[280px] " alt="A girl holding a visa in her hand"/>
        </div>
        <div className="md:text-base text-sm mx-0 md:mx-5">
          <h2 className="lg:text-3xl md:text-4xl text-2xl font-bold hidden md:block">
            {data.title}
          </h2>
          <p className="my-5">{data.description}</p>
          <Link to ="/Quote">
            <button className="bg-[#202A44] lg:mt-10 my-5  text-white px-2 py-1 rounded-md ml-3 text-xl font-bold  hover:bg-slate-300 hover:text-black duration-300">
              {data.text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
