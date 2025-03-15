import React from "react";

const Section2 = ({ data }) => {
  return (
    <div className="mx-auto mb-5 text-center">
      <h2 className="mx-auto border-2 px-3 py-1 w-max rounded-xl">
        {data.mainTitle}
      </h2>

      <div>
        <h3 className="text-2xl font-bold my-1">{data.subTitle}</h3>
        <ul className="flex md:flex-row flex-col  md:gap-12 gap-8 justify-center mt-5 mx-20">
          {data.details.map((item, index) => (
            <li key={index} className="bg-gray-200 rounded-3xl shadow-md">
              <img src={item.img} className="md:w-48 h-48 w-64 rounded-t-2xl" />
              <p className="p-3">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section2;
