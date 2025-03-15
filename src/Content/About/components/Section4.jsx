import React from "react";

const cardData = [
  {
    id: 1,
    title: "Quick Turnaround Time",
    description:
      "Forget months-long waiting periods. We are here to serve you with the highest priority of efficiency to get you an appointment in record time.",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description:
      "Enjoy our reliable service at a competitive price that fits your budget.",
  },
  {
    id: 3,
    title: "Expert Assistance",
    description:
      "Our team ensures every detail is meticulously handled, which can minimize errors that lead to delays.",
  },
  {
    id: 4,
    title: "Stress-Free Procedure",
    description:
      "From identifying available slots until confirming your booking, let us handle everything so that you can focus on what to prepare for your travels.",
  },
];

const Section4 = () => {
  return (
    <div className="max-w-[95%] py-12">

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-[#B6DFE8] p-6 rounded-lg shadow-[0px_4px_25px_0px_#00000040]"
          >
            <h3 className="text-2xl lg:h-14 font-bold">{card.title}</h3>
            <p className="text-gray-800 mt-2 text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
