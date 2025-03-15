import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import NewPart1 from "./NewPart1";
import Part2 from "./Part2";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";

const Service = () => {
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

  const newServices = {
    title: "Our Services",
    details: [
      {
        service: "1. US & German Visa Filing – Simple, Clear, and Fast.",
        redirect: "section1",
      },
      {
        service: "2. Super Quick, Stress-Free appointment booking.",
        redirect: "section2",
      },
      {
        service: "3. Mock Interview Sessions – Prepare Like a Pro! ",
        redirect: "section3",
      },
      {
        service: "4. Real-Time Slot Availability – Never Miss an Opportunity.",
        redirect: "section4",
      },
      {
        service: "5. 1:1 Sessions – Personalized, Authentic Guidance.",
        redirect: "section5",
      },
      {
        service: "6. Visa Refusal Support – We're Here to Help.",
        redirect: "section6",
      },
    ],
  };

  const data1 = {
    title: "1. US & German Visa Filing – Simple, Clear, and Fast",
    description:
      "Preparing for a US visa interview can be nerve-wracking. At visaSprint, we provide personalized 1:1 mock interview sessions to help you succeed. Practice with experts who guide you through common questions, boost your confidence, and prepare you for the big day.",
    content: [
      {
        bold: " Document Preparation",
        text: " We help ensure everything is ready so you avoid any of the usual mistakes.",
      },
      {
        bold: "Form completion",
        text: "Be it DS-160 for the US or help filling up the application completely accurately for German visas.",
      },
      {
        bold: "Schedule an Interview",
        text: "Now that we have your documents ready, it is time to schedule that interview as soon as possible.",
      },
    ],
  };

  const data3 = {
    title: "How It Works",
    content: [
      {
        bold: "Slot Monitoring:",
        text: " We actively monitor real-time slot availability around the clock to identify the earliest possible dates for you.",
      },
      {
        bold: "Reserve Scheduling:",
        text: " Let us secure an appointment best suited for your preferred date and location.",
      },
      {
        bold: "Confirmation Notification:",
        text: " Once we fix an appointment, we will right away let you know all the details thereof, thus ensuring that a smooth process of your process follows towards seeking your visa.",
      },
    ],
  };

  const data4 = {
    mainTitle: "2. Mock Interview Sessions – Prepare Like a Pro!",
    description:
      "At Visa Sprint, we provide mock interview sessions so that you are fully prepared for the real visa interview.",
    title: "Free Mock Interview Sessions for Registered Clients :",
    subDescription:
      "15-20 days of free mock interview preparation for registered clients.",
    cards: [
      {
        heading: "Personalized coaching",
        text: "To improve your responses, body language, and performance.",
      },
      {
        heading: "Build Confidence",
        text: "Our mock sessions simulate the real interview process, giving you the confidence to face the actual interview with ease.",
      },
    ],
    subTitle: " Mock Interview Stand-alone:",
    content:
      "You can have a stand-alone mock interview for an inexpensive fee of Rs.2000 covering 15-20 days of preparation in case you have not yet become one of our clients.",
    details: [
      {
        bold: "Genuine Experience",
        text: " Our mock sessions are purposely made with true visa interview conditions so that you can prepare yourself.",
      },
      {
        bold: "Flexibility",
        text: "  Attend the sessions from anywhere using Google Meet or Microsoft Teams so it could be more convenient for you.",
      },
      {
        bold: "Overall Coaching",
        text: "For 15-20 days, you get thorough guidance from us on enhancing your answer, body language, and performance. Talk about the price tag considering the package!",
      },
    ],
    notification1:
      "Get ready with those bucks, and get a good price to develop the confidence you need to hit that visa interview!",
    nextTitle: "Free Mock Interview Access for All:",
    notifications: [
      {
        bold: "Join Our Community",
        text: " Stay connected with our WhatsApp Channel, WhatsApp Group, or Telegram Channel to join our free mock interview sessions whenever they are available.",
      },
      {
        bold: "Stay Updated",
        text: "We share links and details of free mock sessions through our groups. Join and be notified every time a new session is scheduled.",
      },
    ],

    channels: [
      {
        name: "WhatsApp Channel",
        redirect: "https://www.whatsapp.com/channel/0029Vb0Y1xXGOj9qZe7dAI0",
      },
      {
        name: "WhatsApp Group",
        redirect: "https://chat.whatsapp.com/ImKlNQaj3fFAQZ8foKYPVH",
      },
      {
        name: "Telegram Channel",
        redirect: "https://t.me/visa_slots_itdoubt",
      },
    ],
  };

  const data5 = {
    heading: "3. Real-Time Slot Availability – Never Miss an Opportunity",
    content: [
      {
        bold: "Stay Updated in Real Time",
        text: "Through our WhatsApp and Telegram groups, we notify you in real-time about visa slot availability. You will get updates regarding open slots immediately and be able to act quickly.",
      },
      {
        bold: "Book Directly",
        text: "As soon as the slot is free, you can book your appointment.",
      },
      {
        bold: "Instant Access",
        text: "You will never miss an opportunity to book an appointment because of real-time notifications.",
      },
    ],
  };

  const data6 = {
    heading: "4. 1:1 Sessions – Personalized, Authentic Guidance",
    content: [
      {
        bold: "Clear All Your Doubts",
        text: "Our 1:1 sessions give you personalized guidance to answer all your specific questions and concerns.",
      },
      {
        bold: "Build Trust",
        text: " These sessions offer real advice to you, which helps you to be clear and confident before moving ahead with your application for your visa.",
      },
    ],
  };

  const data7 = {
    title: "5. Visa Refusal Support – We're Here to Help ",
    description:
      "Do not worry in case your application is refused. Visa Sprint will help you to turn it around. Visa Refusal Support includes the following services.",
    content: [
      {
        bold: "Rechecking documents",
        text: "We check all your documents completely to ensure everything is in order and nothing missing or inaccurate, which could be the cause of the refusal.",
      },
      {
        bold: "Interview preparation",
        text: "  Where refusal resulted from a poor interview performance, we give you proper feedback to make you better for your answers and presentation during the next interview.",
      },
      {
        bold: "Filing Assistance",
        text: "We walk you through the process of re-filing and ensure that there is improvement in terms of accuracy and completeness of documentation in the application filing.",
      },
      {
        bold: "Special Appointments Scheduling ",
        text: "We help book appointments from places that have a better acceptance rate, at a place like Mumbai where booking such slots is not a challenge.",
      },
    ],
  };

  return (
    <div className="bg-gray-100 pb-10 w-full flex flex-col justify-center">
      {/* hero and title */}
      <div>
        <div className="flex mb-10 relative min-h-[300px]">
          <img
            src={"/services/services-hero.webp"}
            className=" w-full object-cover"
          />
        </div>
        <h1
          ref={textRef}
          className=" absolute xl:left-10 md:left-[190px] left-2 md:right-20 2xl:top-[600px] xl:top-[550px] lg:top-[450px] md:top-[200px] top-40 right-12 text-white md:text-4xl text-2xl  font-bold"
        >
          Real-Time Updates, Expert Support – We’ve Got Your Visa Covered!{" "}
        </h1>
      </div>
      <div className=" md:w-[90%]    flex flex-col  items-center lg:mx-auto md:mx-10  mx-3 overflow-x-hidden  ">
        {/* section 1 */}
        {/* <Part1 services={services}/> */}

        {/* new section 1 */}
        <NewPart1 data={newServices} />

        {/* section 2 */}
        <Part2 data={data1} />

        {/* section 3 */}
        {/* <Part3 data={data2} /> */}

        {/* section 4 */}
        <Part4 data={data3} />

        {/* section 5 */}
        <Part5 data={data4} />

        {/* section 6 */}
        <Part6 data={data5} />

        {/* section 7 */}
        <Part7 data={data6} />

        {/* section 8 */}
        <Part8 data={data7} />
      </div>
    </div>
  );
};

export default Service;
