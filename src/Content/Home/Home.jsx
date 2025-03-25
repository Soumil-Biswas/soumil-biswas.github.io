import React, {useRef} from "react";
import HomeTitleCard from "./components/HomeTitleCard";
import Hero from "../../Components/Hero";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = () => {

  const homePageCards = [
    {
      img: "/images/homeTitleCard/portfolio.jpg",
      hoverImg: "/images/homeTitleCard/botan2.jpg",
      title: "Design",
      desc: "Projects made in unreal engine and/or elsewhere, graphics design, and art collections.",
      to: "/Design",
    },
    {
      img: "/images/homeTitleCard/rvl-4k-dvdr-1.jpg",
      hoverImg: "/images/homeTitleCard/rvl-4k-dvdr-2.jpg",
      title: "Videos & Cinematography",
      desc: "Videos, edits and Graphic peices.",
      to: "https://soumil-biswas-web.github.io/DVDR/",
    },
    {
      img: "/images/homeTitleCard/Screenshot-Code-1.png",
      hoverImg: "/images/homeTitleCard/Screenshot-Code-2.png",
      title: "Programming",
      desc: "Projects in Web Development, IT and Virtual Reality.",
      to: "/Development",
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
      });
  }, { scope: section }); 

  return (
    <div className="magic-center mb-[100px] grow">
      <Hero
        h1="Web Developer | UI/UX Designer | Cinematographer | Broke."
        h3="Yes, this is my first project."
      />

      <div ref={section} className="flex flex-col md:flex-row justify-center w-[80%] gap-8 md:gap:5 my-auto">      
        {homePageCards.map((card, index) => (
          <HomeTitleCard key={index} card={card} />
        ))}      
      </div>
    </div>
  );
};

export default Home;
