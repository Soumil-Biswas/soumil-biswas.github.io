import React, {useRef} from "react";
import HomeTitleCard from '../Home/components/HomeTitleCard';
import Hero from '../../Components/Hero';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function ProgrammingIndex() {
  const homePageCards = [
    {
      img: "/images/homeTitleCard/Screenshot-Code-1.png",
      hoverImg: "/images/homeTitleCard/Screenshot-Code-1.png",
      title: "Software Development",
      desc: "Projects in IT and Programming.",
      to: "https://github.com/Soumil-Biswas",
    },
    {
      img: "/images/homeTitleCard/Screenshot-Code-3.png",
      hoverImg: "/images/homeTitleCard/Screenshot-Code-3.png",
      title: "Web Development",
      desc: "Projects in Web Development.",
      to: "https://github.com/Soumil-Biswas-Web",
    },
    {
      img: "/images/homeTitleCard/960x0.jpg",
      hoverImg: "/images/homeTitleCard/960x0.jpg",
      title: "VR Development",
      desc: "Stint in Virtual Reality Simulations.",
      to: "/Development/VR",
    },
  ]

  const section = useRef(null);

  useGSAP(() => {
      const timeline = gsap.timeline()
  
      // Step 1: Ensure all elements are hidden at the start
      timeline.set(section.current.children, { opacity: 0, y: 100 });

      // Step 2: Animate elements appearing with a stagger
      timeline.to(section.current.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });
  }, { scope: section });   

  return (
    <div className="magic-center mb-[100px] grow">
      <Hero
        h1="GitHub Profiles."
        h3="Pick the portfolio to view."
      />      

      <div ref={section} className="flex flex-col md:flex-row justify-center w-[80%] gap-8 md:gap:5 my-auto">      
        {homePageCards.map((card, index) => (
          <HomeTitleCard key={index} card={card} />
        ))}      
      </div>
    </div>
  );
};

