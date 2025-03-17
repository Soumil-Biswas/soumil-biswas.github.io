import React from 'react'
import HomeTitleCard from '../Home/components/homeTitleCard';
import Hero from '../../Components/Hero';

export default function Programming() {
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
  ]

  return (
    <div className="magic-center mb-[100px] grow">
      <Hero
        h1="GitHub Profiles."
        h3="Pick the portfolio to view."
      />      

      <div className="flex justify-center w-[80%] gap-3 my-auto">      
        {homePageCards.map((card, index) => (
          <HomeTitleCard key={index} card={card} />
        ))}      
      </div>
    </div>
  );
};

