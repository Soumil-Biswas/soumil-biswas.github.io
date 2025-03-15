import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CTAButton from "../header/components/CTAButton";

export default function HeroPage() {
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
      {/* Background Image */}
      <img
        className="object-cover"
        src="/landing-page-home/home-hero.webp"
        alt="Hero Background"
      />

      {/* Text Content */}
      <div className="absolute right-0 w-80 sm:w-1/2 top-auto mt-[100px] sm:mt-[10vw]">
        <h1
          ref={textRef}
          className="text-white font-bold text-pretty text-xl md:text-2xl lg:text-3xl sm:mb-10 pr-10"
        >
          Hassle-Free Visa Services, Every Step of the Way.
        </h1>
        <Link to="/AboutUs" className="text-sm sm:text-lg">
          <CTAButton text="Discover More" />
        </Link>
      </div>
    </div>
  );
}
