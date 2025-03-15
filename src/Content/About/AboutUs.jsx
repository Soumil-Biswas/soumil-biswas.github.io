import { useEffect, useRef } from "react";
import Section1 from "./components/Section1";
import { gsap } from "gsap";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const AboutUs = () => {
  const contentData1 = {
    id: 1,
    title: "How We Are ?",
    description:
      "Visa Sprint is your trusted platform for making it easier to get a US visa application. That’s our mission: let your visa journey be without hassle, without worry, and eventually successful. Whether it’s helping you find the right visa appointment, coaching you for the interview itself, or even reapplication after a visa refusal; be assured that we will stay with you all the time. We put all that expertise into a personalized approach that makes the complex world of visa applications much easier and much more accessible.",
    image: "/about/Rectangle 185.png",
    image_Mobile: "/about/Rectangle 185_Mobile.png",
  };

  const contentData2 = [
    {
      id: 1,
      image: "/about/Vector.png",
      title: "Service Experience.",
      description:
        "We have years of experience in dealing with visa applications. We know the difficulties the applicants may face, and we can help in avoiding the mistakes they make.",
    },
    {
      id: 2,
      image: "/about/Vector (1).png",
      title: "Personalized Support.",
      description:
        "We treat every applicant as an individual. We offer individualized services that best meet your specific needs and give you the best possible chance for your visa application.",
    },
    {
      id: 3,
      image: "/about/Vector (2).png",
      title: "Transparency.",
      description:
        "The Visa Sprint is transparent in its every practice. There are no hidden fees and complicated procedures. We ensure that you fully understand each step of the process, bringing peace of mind with that thought.",
    },
  ];

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

  return (
    <div className="bg-white">
      {/* hero section */}
      <div className="relative flex min-h-[300px]">
        <img
          src="/about/Untitled design (1) 1 (1).webp"
          className="object-cover"
        />
      </div>
      <h1
        ref={textRef}
        className="text-white absolute right-3 sm:right-8 md:right-10 lg:right-76 top-48 w-max md:top-72 lg:top-96 text-lg md:text-4xl font-bold max-w-[90%]"
      >
        Simplify Visas, Amplifying Dreams
      </h1>

      <div className="w-full flex flex-col items-center bg-gray-100">
        {/* section1 */}
        <Section1 data={contentData1} />
        <Section2 data2={contentData2} />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>

      {/* section 2 */}

      {/* <Section2 data={content2} /> */}
    </div>
  );
};

export default AboutUs;
