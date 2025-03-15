import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

import { gsap } from "gsap";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const Interview = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const textContent = textElement.textContent;

    const chars = textContent
      .split("")
      .map((char) => (char === " " ? "&nbsp;" : char));
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

  const content1 = {
    title: "Mock Interview Services for US Visa Applicants",

    description:
      "At Visa Sprint, we realize that your US visa interview is one of the most vital steps in the entire visa application process. Understandably, people may feel somewhat nervous or uneasy. But trust us, that is where it gets easy to deal with by preparing accordingly. To assist you there, we've developed our Mock Interview Services We offer tailored, one-on-one sessions designed to simulate real US visa interviews. Whether you’re applying for a B1/B2 (Business/Tourist), F1 (Student), H1B (Work), or other visa types, our expert-led coaching helps you tackle every aspect of the interview process with ease.",
  };

  const content2 = {
    title: "Why Choose Visa Sprint’s Mock Interview Service?",
    features: [
     {
        id:1,
        heading: "Tailored to Your Visa Type",
        description:
          "We provide mock interviews tailored according to your specific visa needs. Our questions and answers are customized, covering visa-specific areas so you can be prepared for the type of questions they would ask you.",
        visaTypes: [
          {
            type: "Student Visa F1",
            details:
              "Questions over your study plan, financial capacity, and reasons to return back to your country.",
          },
          {
            type: "Work Visa H1B",
            details:
              "Questions about the employer, your job description, and professional work experience.",
          },
          {
            type: "B1/B2 Business/Tourist Visa",
            details:
              "Questions regarding purpose of visit, itinerary, and funding.",
          },
        ],
     },
     {
       id:2,
       heading: "Focus on Building Confidence",
       description:
       "It is not just that we'll get you ready for the questions but also manage the nerves, polish the communication, and give you immense confidence. We ensure you go into the interview with the visa officer quite effortlessly and clearly.",
      },
      {
         id:3,
         heading: "Realistic Simulations",
         description:
           "Our expert trainers recreate the exact setting of a US visa interview. From the rapid-fire questions to how you enhance your delivery of answers, we ensure that you are thoroughly prepared for the real situation.",
       },
    ],
  };

  const content3 = {
    title: "Features of Our Mock Interview Services",
    features: [
      {
        id: 1,
        heading: "Thorough Practice Sessions",
        description: [
          "Practice makes perfect, and that is something we at Visa Sprint can give you ample opportunities for doing.",
          "Sessions are repeated as many times as required for you to gain the confidence and comfort.",
          "You may repeat the sessions if you require more practice.",
        ],
      },
      {
        id: 2,
        heading: "Custom Coaching for Each and Every Applicant",
        description: [
          "Every applicant is unique, as is their scenario.",
          "Our coaches personalize sessions so that they suit the specific type of visa, and your own personal background.",
          "Whether it is academic planning for students, travel itinerary for tourists, or job roles for professionals, we have all this.",
        ],
      },
      {
        id: 3,
        heading: "Feedback and Coaching from the Experts",
        description: [
          "After each mock session, our experienced trainers will provide you with constructive feedback.",
          "Let your answers be clean and relevant.",
          "You would be advised on your body language, tone, and presentation.",
          "Let you practice to avoid common mistakes and avoid nervous tendencies.",
        ],
      },
      {
        id: 4,
        heading: "Free Mock Interview Sessions for Registered Clients",
        description: [
          {
            bold: "Duration:",
            text: " 15-20 days of free mock interview preparation exclusively for our registered clients.",
          },
          {
            bold: "Personalized Coaching:",
            text: " Sessions are conducted as per your visa type, and you would be coached on improving your responses, body language, and performance.",
          },
          {
            bold: "Build Confidence:",
            text: " Simulated interview scenarios will prepare you to face the actual interview process without any hassle and preparedness.",
          },
        ],
      },
      {
        id: 5,
        heading: "Stand-alone Mock Interview Sessions for Rs. 2000",
        description: [
          {
            bold: "",
            text: "Not registered with Visa Sprint yet? No problem at all! Get a one time package for very little money only.",
          },
          {
            bold: "Authentic Experience:",
            text: " Relive an experience of an interview and be in a position ready to ask somewhat similar questions relevant to your specified visa application.",
          },
          {
            bold: "Online Available Sessions:",
            text: " Choose to participate remotely from the ease of your room using Google Meet or Microsoft Teams.",
          },
        ],
      },
      {
        id: 6,
        heading: "Want something for free access? We’ve got you covered!",
        description: [
          {
            bold: "Join Our Community:",
            text: " You may reach out to Visa Sprint using the free WhatsApp Channel, WhatsApp Group, or Telegram Channel to avail of mock interview opportunities.",
          },
          {
            bold: "Stay Informed:",
            text: " Subscribe to get instant links to access the free session once it is ready.",
          },
        ],
      },
    ],
  };

  const content4 = {
    title: "Kinds of Visa Mock Interview Sessions We Have",
    features: [
      {
        id: 1,
        heading: "B1/B2 Visa Mock Interviews",
        description: [
          "Travel itinerary, finance source, and intend to return to your homeland.",
          "Learn how to answer questions relating to your itinerary and purpose of visit.",
        ],
      },
      {
        id: 2,
        heading: "F1 Visa Mock Interviews",
        description: [
          "Designed for the student, covering study plans, finances, as well as what you hope to achieve in future careers.",
          "Learn how to have the confidence and be able to answer why you chose your course and institution.",
        ],
      },
      {
        id: 3,
        heading: "H1B Visa Mock Interviews",
        description: [
          "Designed for the professional, addressing job role, employer, as well as professional background.",
          "Learn to present your credentials and answer your employment.",
        ],
      },
      {
        id: 4,
        heading: "Other Visa Types",
        description: [
          "From L1 intra-company transfer to J1 exchange visitor and many more.",
        ],
      },
    ],
    additionalSection: {
      title: "Start Here Your Path to Success Visa Interview",
      description: [
        "US Visa interview is no cause for nervous breakdowns with our Visa Sprint expert mock interview.",
        "Feel more than ready at the embassy or consulate interview.",
      ],
      callToAction: {
        heading: "Get Ready",
        text: "Book your mock interview session today and begin the journey towards making your US visa dream come true!",
      },
    },
  };

  return (
    <div className="bg-gray-100 overflow-x-hidden pb-10">
      <div className="flex mb-10 relative min-h-[300px]">
        <img 
          src={"/interview-hero.webp"} 
          className=" w-full object-cover" 
        />
        <h1
          ref={textRef}
          className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold absolute top-32 sm:top-40 lg:top-64 md:top-44  left-6 sm:left-16  lg:left-36 md:left-20 text-white"
        >
          Nail Your Visa Interview –&nbsp;
          <br />
          Practice with Experts!
        </h1>
      </div>
      <div className=" w-[80%] flex flex-col items-center mx-auto">
       {/* section1 */}
      <Section1 data={content1} />
      <Section3 data={content3}/>
      <Section2  data={content2}/>
      <Section4 data={content4}/>

        <button className="   lg:text-3xl md:text-2xl text-xl font-bold my-3  md:px-8 py-3 px-5 w-max rounded-md bg-[#202A44] text-white hover:bg-slate-300 hover:text-black duration-500">
          <Link to="/Quote">Book Your Session Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Interview;
