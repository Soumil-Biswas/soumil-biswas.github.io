import React from "react";
import HomeTitleCard from "./components/homeTitleCard";
import Hero from "../../Components/Hero";

const Home = () => {

  const homePageCards = [
    {
      img: "/images/homeTitleCard/portfolio.jpg",
      hoverImg: "/images/homeTitleCard/botan2.jpg",
      title: "Design",
      desc: "Projects made in unreal engine and/or elsewhere, graphics design, and art collections.",
      to: "Programming",
    },
    {
      img: "/images/homeTitleCard/rvl-4k-dvdr-1.jpg",
      hoverImg: "/images/homeTitleCard/rvl-4k-dvdr-2.jpg",
      title: "Videos & Cinematography",
      desc: "Videos, edits and Graphic peices.",
      to: "Programming",
    },
    {
      img: "/images/homeTitleCard/Screenshot-Code-1.png",
      hoverImg: "/images/homeTitleCard/Screenshot-Code-2.png",
      title: "Programming",
      desc: "Projects in Web Development, IT and Cybersecurity.",
      to: "Programming",
    },
  ]

  return (
    <div className="magic-center mb-[100px] grow">
      <Hero
        h1="UI/UX Designer, Artist, Cinematographer, Broke."
        h3="Yes, I make websites too."
      />

      <div className="flex justify-center w-[80%] gap-3 my-auto">      
        {homePageCards.map((card, index) => (
          <HomeTitleCard key={index} card={card} />
        ))}      
      </div>
    </div>
  );
};

export default Home;
