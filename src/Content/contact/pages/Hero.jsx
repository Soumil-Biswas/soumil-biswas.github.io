import React from "react";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const Hero = () => {
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
    <div className="flex mb-10 relative min-h-[300px]">
      <img src="/contact/contact.png" className="w-full object-cover" />
      <h1
        ref={textRef}
        className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold absolute top-32 sm:top-40 lg:top-64 md:top-44  left-6 sm:left-16  lg:left-36 md:left-20 text-white"
      >
        Your visa journey made easy—contact us today!
      </h1>
    </div>
  );
};

export default Hero;
