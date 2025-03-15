import React from "react";

const Section1 = ({ data }) => {
  return (
    <div className="lg:my-10">
      <div className="flex lg:flex-row flex-col lg:mx-10 md:mx-5 mx-0 lg:gap-28 md:gap-5 gap-3 items-center mt-16">
        <h2 className="md:text-3xl text-2xl font-bold block lg:hidden">{data.title}</h2> 
        <img src={"/interview/Component 2.webp"} alt="" className="w-full lg:w-1/3 lg:mt-8"/>
        <div className="lg:space-y-4 lg:w-7/12  w-full">
          <h2 className="md:text-3xl text-2xl font-bold hidden lg:block">{data.title}</h2>          
          <p className="my-5 md:text-lg text-sm">{data.description}</p>         
        </div>
      </div>
    </div>
  );
};

export default Section1;
