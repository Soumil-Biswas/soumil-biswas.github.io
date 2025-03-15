import React, { useState } from "react";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const OurFaqs = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const topTitle = {
    Description:
      "This is your comprehensive FAQ section with all-inclusive answers on your questions about US Visa Slot Booking, and Mock Interview Services:",
  };

  const objects = [
    {
      img: "./Faqs/Group 46.webp",
      ques: "1. How do I book an appointment for the US visa ?",
      ans: "Our website has made it easy and convenient to book a US visa appointment:",
      desc: [
        {
          subhead: "Availability Check : ",
          point: " We track real-time visa slot dashboards, looking for available appointments based on your preferences, such as visa category, location, and desired dates.",
        },
        {
          subhead: "Provide Credentials : ",
          point: " Share your details, including passport information, visa type, and DS-160 confirmation number, so we can proceed with finding the right slot for you.",
        },
        {
          subhead: "Check Slot Availability : ",
          point: " Based on your preferences, we confirm the availability of suitable slots and communicate the options to you for approval.",
        },
        {
          subhead: "Slot Booking : ",
          point: "Once you approve, our team promptly books the selected appointment slot to secure your date and time.",
        },
        {
          subhead: "Confirmation : ",
          point: " You will be sent an e-mail with all the details confirmed, like date, time, and place of the appointment.",
        },
        {
          subhead: "Payment : ",
          point: " To confirm and secure your appointment, please make the payment for your booking. Thus, your reservation is guaranteed to be confirmed.",
        }
      ],
    },
    {
      img: "./Faqs/Group 46.webp",
      ques: " 2. Which US visa types do you book ?",
      ans: "We help you book these US visa types : ",
      desc: [
        {
          subhead: "B1/B2 (Business/Tourist) : ",
          point: " For business visits or for leisure trips.",
        },
        {
          subhead: "F1 (Student) : ",
          point: " For students in the United States for studies.",
        },
        {
          subhead: "H1B (Work) : ",
          point: " For the skilled worker to look for work in the US.",
        },
        {
          subhead: "J1 (Exchange Visitor) : ",
          point: " This is applied for exchange purposes, such as research or training.",
        },
        {
          subhead: "L1 (Intra-Company Transfer) : ",
          point: " For intra-company transfers to the US location Whatever your work visa, education, or travel, we got you covered!",
        },
        {
          subhead: "K1 Visa (Fiancé(e) Visa) :",
          point: " commonly referred to as a fiancé(e) visa, enables a U.S. citizen to bring their foreign fiancé(e) into the U.S. so that they can marry within 90 days of entry.",
        },
      ],
    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "3.  How would I know if there are slots available ?",
      ans: " Our platform allows you to be informed in real time about visa slots available at US consulates. You may also enable notifications that will inform you instantly every time new slots are open, so you will not miss an opportunity to book your appointment.",
      point: "",
    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "4. Is it possible to reschedule my visa slot after I have booked it ?",
      ans: "Yes, it is possible to reschedule your appointment in case new slots become available. You can access your account and go by the instructions to reschedule. Note that rescheduling policies will vary with different rules and regulations applied by the US consulate at which you are booked for your appointment.",
      point: "",
    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "5. What does Mock Interview Service cover ?",
      ans: "Our Mock Interview Service prepares you to ace your US visa interview with confidence:",
      desc: [
        {
          subhead: "1:1 Sessions : ",
          point: "Unlimited one to one sessions up to the visa approval.",
        },
        {
          subhead: "Tailor-made Advise : ",
          point: " Accordingly to your respective visa type eg. B1/ B2, F1, H1B.",
        },
        {
          subhead: "Constructive criticism : ",
          point: " In dept feedback for corrections and boosting.",
        },
        {
          subhead: "Common Questions : ",
          point: " Preparing against frequently asked most challenging questions faced in the visa interviews.",
        },
      ],

    },
    {
      img: "./Faqs/Group 46.webp",
      ques: " 6. Who will interview me ?",
      ans: "Mock interviews are conducted by professionals who have vast knowledge of the US visa interview process. These experts will guide you with actionable insights and constructive feedback to enhance your chances of success.",
      point: "",
    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "7.How do I book a mock interview session ?",
      ans: "Booking a mock interview session is simple : ",
      desc: [
        {
          subhead: "Step1 : ",
          point: "Log in to your account.",
        },
        {
          subhead: "Step2 : ",
          point: "Reserve your desired date and time for the session.",
        },
        {
          subhead: "Step3 : ",
          point: "Confirm the booking.",
        },

      ],

      subhead: "Desclaimer : ",
      point: "You will get an email about attending the meeting and also guidelines to that session.",

    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "8. Do I need more than one mock interview session ?",
      ans: "Of course, unlimited mock interviews with us until you feel perfectly comfortable and confident and ready to sit for a visa interview.",
      point: "",

    },
    {
      img: "./Faqs/Group 46.webp",
      ques: " 9. Would you assist with documentation for obtaining a visa?",
      ans: "Although our main concern will be slot booking and interview preparation, we can give you some general information about the necessary documents required for your visa application. In this way, you are fully prepared for everything.",
      point: "",

    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "10. What if my visa is rejected?",
      ans: "Our mock interview service is well designed to keep you prepared fully for the interview. However, the final answer is up to the consulate officer. If they decline your visa application, we'll be able to help you out by perfecting your approach in order to give you a ready chance for a next interview.",
      point: "",

    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "11. Is my data safe on your website ?",
      ans: "Yes, your data's safety is our number one priority. We implement robust security measures to protect your personal information and ensure it is handled responsibly and confidentially.",
      point: "",

    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "12. How do I contact the support team ? ",
      ans: "Our support team operates on a 24/7 basis to support you. Feel free to contact us at: ",
      desc: [
        {
          subhead: "Email : ",
          point: "contact@visasprint.itdoubt.com",
        },
        {
          subhead: "Phone/WhatsApp : ",
          point: "+91-8222891986",
        },
      ]
    },
    {
      img: "./Faqs/Group 46.webp",
      ques: "13. Do you offer refunds?",
      ans: "Yes, and refunds are processed under specified conditions in accordance with our cancellation and refund policy. We indeed process the refunds if your bookings are canceled or you meet the conditions to return the refund within the cancellation time frame. Be free to raise any question in case of returns or for clarification to be made through support.",
      point: "",
    },
  ];

  return (
    <section className="bg-gray-100">
      <div className="flex mb-10 relative min-h-[300px]">
        <img
          className="w-full object-cover"
          src="./Faqs/faq banner.webp"
          alt="faq hero img"
        />
        <h1
          ref={textRef}
          className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold absolute top-40 lg:top-64 md:top-44 left-6 sm:left-16 lg:left-36 md:left-20 text-white"
        >
          Your Visa Questions, <br />
          Our Expert Answers!
        </h1>
      </div>

      <div className="p-3 md:p-16">
        <h2 className="font-bold text-lg sm:text-2xl mt-4">{topTitle.Description}</h2>
        <p className="text-lg mt-4 text-pretty"></p>

        <div className="mt-8">
          {objects.map((items, index) => {
            return (
              <div
                key={index}
                className="border-b bg-[#E8E8E8]  mt-2 rounded-xl hover:bg-gray-300 transition-all duration-300 "
              >
                <div
                  onClick={() => handleToggleAccordion(index)}
                  className="flex justify-between items-center cursor-pointer pl-5 space-y-5 "
                >
                  <span className="text-lg font-semibold ">{items.ques}</span>
                  <img
                    src={items.img}
                    alt="angle-down-icon"
                    onClick={() => handleToggleAccordion(index)}
                    className={`text-2xl pb-2 mr-5 transition-transform ${activeIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  <div className="text-gray-700 pl-8 mb-4">
                    <p className="w-[90%]">{items.ans}</p>

                    <ul className="list-disc">
                      {items.desc &&
                        items.desc.map((items, index) => {
                          const { subhead, point, last } = items;
                          return <div className="w-[80%]" key={index}>
                            <li >
                              <strong>{subhead}</strong>{point}
                            </li>
                            {last && <div>{last}</div>}
                          </div>

                        }
                        )}
                    </ul>
                    <p>{items.point}</p>
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

export default OurFaqs;
