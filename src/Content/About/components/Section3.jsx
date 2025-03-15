import React from "react";
import Slideshow from "./slideshow";

const data = {
  mission: {
    title: "Our Mission",
    description:
      "The mission of Visa Sprint is to empower visa applicants with the right tools, resources, and expert guidance to confidently navigate their visa process. We know applying for a visa can feel confusing as a whole procedure. That is why we are wholly committed to making your experience as smooth as possible.",
  },

  offerings: [
    {
      id: 1,
      title: "1. Stress-Free Visa Slot Booking",
      description:
        "Navigating the complexities of visa slot availability can be quite stressful. At Visa Sprint, we give you real-time updates on visa appointment slots so that you are always updated and can book appointments for all categories of US visas. We help you secure your appointment conveniently without incurring unnecessary delays.",
    },
    {
      id: 2,
      title: "2. Simplified Mock Interview Practice",
      description:
        "We make visa interview preparation less daunting by providing unlimited personalized coaching sessions. In doing so, we assist you in building the confidence necessary to ensure that the process becomes a success. We help you improve your communication skills, guide you through common interview questions, and simulate real-life scenarios. Our expert coaches work in collaboration with you to ensure that on the day of your interview, you will feel confident and prepared and thereby increasing your chances of success.",
    },
    {
      id: 3,
      title: "3. German & US Visa Application Services",
      description:
        "We specialize in helping you achieve your goals in Germany or the US by offering end-to-end support on visa applications. Our services include eligibility checks, thorough document preparation, and making sure that embassy requirements are met for a hassle-free experience.",
    },
    {
      id: 4,
      title: "4. Refusal Case Assistance",
      description:
        "A visa refusal can be disheartening, but it doesn’t mean it’s the end of your journey. Our experts analyze the reasons for your visa refusal and offer strategic advice on how to address these issues for a stronger reapplication. With our guidance, you’ll understand the best steps to take and improve your chances of visa approval in your next attempt.",
    },
  ],

  services: [
    {
      id: 1,
      title: "Why Our Appointment Booking Service?",
      description:
        "We book appointments for you, ensuring real-time availability without any hassle. Save time and manage appointments effortlessly with just a few clicks!",
      image: "/about/3-39 7.png",
    },
  ],
};

const Section3 = () => {
  return (
    <div className="flex flex-col items-center w-full gap-16">
      {/* ✅ Mission Section */}
      <section className="mx-6 max-w-6xl">
        <h2 className="text-4xl font-bold mb-4">{data.mission.title}</h2>
        <p className="text-gray-800 text-lg mx-auto">
          {data.mission.description}
        </p>
      </section>

      {/* ✅ What We Offer Section */}
      <section className="flex flex-col xl:flex-row items-center md:gap-0 gap-12 max-w-[1280px]">
        <div className="w-full lg:w-1/2 xl:w-[40%] items-center justify-center flex">
          <h2 className="hidden lg:block text-6xl font-[857] italic text-gray-900 text-left">
            What We <br /> Offer?
          </h2>
          <h2 className="block lg:hidden text-3xl font-[857] italic text-gray-900 text-center">
            What We Offer?
          </h2>
        </div>
        <Slideshow data={data}/>
      </section>

      {/* ✅ Image + Text Section */}
      {data.services.map((service) => (
        <section
          key={service.id}
          className="flex flex-col md:flex-row items-center justify-center w-[90%]"
        >
          {/* Image */}
          <div className="w-full max-w-96 md:max-w-none md:w-2/5">
            <h2 className="text-3xl font-bold mb-4 my-10 md:my-0 block md:hidden">{service.title}</h2>
            <img
              src={service.image}
              alt={service.title}
              className=" object-cover"
            />
          </div>
        
          {/* Text Content */}
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-5xl font-bold mb-4 my-10 md:my-0 hidden md:block">{service.title}</h2>
            <p className="text-lg">{service.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Section3;
