import React from "react";

const Section1 = ({ data }) => {
  return (
    <div
      key={data.id}
      className="flex flex-col-reverse lg:flex-row items-center rounded-lg gap-16 lg:gap-0 mt-16 lg:mt-0 w-[80%] lg:w-auto mb-16 lg:mb-0"
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-24">
        <h2 className="text-5xl font-[857] italic text-gray-900 hidden md:block">
          {data.title}
        </h2>
        <p className="text-gray-700 text-lg mt-4">{data.description}</p>
      </div>

      {/* Right Image */}
      <div className="hidden lg:flex md:w-1/2 justify-center">
        <img src={data.image} alt="Visa process" className="" />
      </div>
      <div className="flex flex-col gap-5 lg:hidden justify-center  max-w-96 lg:max-w-none">
        <h2 className="text-3xl text-center font-[857] italic text-gray-900 block md:hidden">
          {data.title}
        </h2>
        <img src={data.image_Mobile} alt="Visa process" className="rounded-3xl shadow-[0px_4px_25px_0px_#00000040]" />
      </div>
    </div>
  );
};

export default Section1;
