import React from "react";

const LeftSection = ({ data }) => {
  return (
    <div className="md:w-6/12">
      <h2 className="text-2xl font-bold">{data.mainTitle}</h2>
      <p className="mt-5 ">{data.description}</p>
      <ul className="list-disc md:ml-3 ml-5 mb-5">
        {data.pointers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="xs:ml-5">
        {data.contactDetails.map((item, index) => (
          <div key={index} className="flex md:gap-8 gap-3 mb-2 items-center">
            <div className=" xs:flex shadow-lg bg-white rounded-full w-12 items-center p-2">
              <img src={item.img} alt="" className="w-8 " />
            </div>

            <div>
              <p className="border-b-2 border-gray-300">{item.name}</p>
              <p className="text-sm xs:text-lg">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-6 items-center lg:ml-24 ml-2 mt-8">
        {data.socialMedia.map((media, index) => (
          <div
            key={index}
            className="bg-white rounded-md px-2 py-1 cursor-pointer hover:bg-gray-400 duration-300"
          >
            <a href={media.url} target="_blank" rel="noopener noreferrer">
              {" "}
              <img
                className="cursor-pointer h-7 w-6 object-contain"
                src={media.img}
                alt={`Social media ${index}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
