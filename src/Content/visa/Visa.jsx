import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Visa = () => {


  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const textContent = textElement.textContent;

    const chars = textContent
      .split("")
      .map((char) => (char === " " ? " " : char));
    textElement.innerHTML = chars
      .map((char) => `<span>${char}</span>`)
      .join("");

    gsap.from(textElement.querySelectorAll("span"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, []);

  const topTitle = {
    topheading: " Overview of the US Visa Types and How to Apply :",
  };

  const Images = [
    {
      id: "B1B2_Visa",
      img: "./visa/1.webp",
      heading: "B1/B2 Visa (Business/Tourist Visa)",
      para: "The B1 (Business) and the B2 (Visitor) visas allow a temporary person's entry to and stay into the United States. It is a pretty flexible visa for people visiting the country on professional or leisurely purposes.",
      path: "/visa/Contentvisa/8ed108d9bbb01",
    },
    {
      id: "F1_Visa",
      img: "./visa/2.webp",
      heading: " F1 Visa (Student Visa) ",
      para: "The F1 visa is for international students who are studying at the SEVP-approved U.S. institution in academic or language programs. It's a step towards someone's study plan at the U.S.",
      path: "/visa/Contentvisa/9020ca26230a2",
    },
    {
      id: "H1B_Visa",
      img: "./visa/3.webp",
      heading: "H1B Visa (Work Visa)",
      para: "H1B visa is given to the U.S. employers in order to hire foreign professionals on account of specialized skills hence attracting highly skilled workers.",
      path: "/visa/Contentvisa/a7bdf71c0bee3",
    },
    {
      id: "J1_Visa",
      img: "./visa/4.webp",
      heading: "J1 Visa (Exchange Visitor Visa)",
      para: "The J1 visa supports cultural exchange and educational experience for individuals participating in an exchange program in the U.S.",
      path: "/visa/Contentvisa/5738f01933bf4",
    },
    {
      id: "L1_Visa",
      img: "./visa/5.webp",
      heading: " L1 Visa (Intra-Company Transfer Visa)",
      para: "The L1 visa allows employees moving within the same company into a US office by presenting growth opportunities within the firm.",
      path: "/visa/Contentvisa/75ddf0898486g5",
    },
    {
      id: "K1_Visa",
      img: "./visa/6.webp",
      heading: " K1 Visa (Fiancé(e) Visa)",
      para: "The K1 visa is also simply called the fiancé(e) visa. This allows an American citizen to bring in the foreign fiancé(e) into the United States to be married to him/her. This requires getting married within 90 days after entering the U.S.",
      path: "/visa/Contentvisa/e978e401626e6",
    },
  ];

  return (
    <section className="h-auto w-auto bg-gray-100">
      <div className="flex mb-10 relative min-h-[300px]">
        <img
          className="w-full object-cover"
          src="./visa/visa banner.webp"
          alt="Hero"
        />
        <h1
          ref={textRef}
          className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold absolute top-4 sm:top-40 lg:top-64 md:top-44  left-6 sm:left-16  lg:left-36 md:left-20 text-white "
        >
          Discover the Right Visa and Learn How to Apply Today!
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="p-6 text-center text-[20px] font-semibold">
          {topTitle.topheading}
        </h2>

        <div className="mt-5 mb-8 gap-y-6 sm:gap-y-4 h-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 lg:gap-y-8">
          {Images.slice(0, 6).map((items, key) => {
            const { img, heading, para, id } = items;
            return (
              <div
                key={key}
                className="group flex flex-col h-auto w-auto grow md:h-[450px] md:max-w-[335px] rounded-lg items-center transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  className="w-full object-cover overflow-y-hidden object-top rounded-t-3xl"
                  src={img}
                  alt="visa"
                />

                {/* Overlapped content */}
                <div className="relative bg-[#F3F4F7] rounded-2xl bottom-[50px] h-full w-[90%] p-4 space-y-3 shadow-xl flex flex-col justify-between transition-all duration-300 transform group-hover:-translate-y-4">
                  <h3 className="font-[700] text-[18px]">{heading}</h3>
                  <p className="text-[14px] font-semibold transition-all duration-300 transform group-hover:-translate-y-2">
                    {para}
                  </p>
                  <div>
                    <hr className="border-1 border-gray-500 " />
                    <Link to={`/visa/${id}`}>
                      <button className="bg-[#202A44] p-1 text-white rounded-lg cursor-pointer w-24 transform hover:scale-105 hover:bg-slate-300 hover:text-black duration-300 mt-2">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Visa;
