import React from "react";

const Section2 = ({ data2 }) => {
  return (
    <div className="flex flex-col items-center gap-8 mb-16">
      <h2 className="text-4xl font-bold">Why Choose Us?</h2>
      <div className="flex flex-wrap justify-center gap-2 relative">
        {data2.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col w-full xs:w-96 xl:h-96 justify-center ${card.id === 2 ? "xl:justify-end" : "xl:justify-start"}`}
          >
            <div className="grid [grid-template-areas:'stack']">
              {/* Background Shape */}
              <div className={`[grid-area:stack] flex overflow-visible ${
                (card.id === 3) && "justify-end"
              }`}>
                <img
                  className="w-48 h-48"
                  src={card.image}
                  alt="Card"
                />
              </div>

              {/* Card Content */}
              <div className={`[grid-area:stack] py-2 px-5 m-2 bg-[#E7E7E7]/85 rounded-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.25)] w-full xs:w-80 ${
                card.id === 1 ? "xs:ml-10 xs:mt-10" : 
                card.id === 2 ? "xs:ml-1 xs:mt-10" :
                card.id === 3 ? "xs:mt-10" : ""
              }`}>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-lg leading-6 text-gray-700">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
