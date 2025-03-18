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
      to: "Design",
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
      desc: "Projects in Web Development, IT and Cybersecurity.",
      to: "Development",
    },
  ]

  return (
    <div className="magic-center mb-[100px] grow">
      <Hero
        h1="Web Developer | UI/UX Designer | Cinematographer | Broke."
        h3="Yes, this is my first project."
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
