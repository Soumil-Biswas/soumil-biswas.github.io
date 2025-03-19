import ItemEntry from "./components/ItemEntry";
import Hero from "../../Components/Hero";
import AestheticLuknAss from "./components/AestheticLuknAss";

const AboutUs = () => {

  const items = [
    {
      title: "Self Employed",
      items: [
        "• Communicating with clients. Managing interests and delivering.",
        "• Design, Develpment, Content enrichment, with a primary focus on Web Development.",
        "• Online Hosting and maintainance support",
      ]
    },
    {
      title: "Frontend Developer, IT Doubt",
      items: [
        "• Managed a team of 4 Developers undertaking jam-stack projects.",
        "• Used git and GitHub extensively to track and branch work for each member.",
        "• Used React, Tailwind, GSAP, react-router and Redux for Front-end development.",
        "• This is where the back-end journey starts.",
        "• Created Extensions for Chromium supported Browsers.",
      ]
    },
    {
      title: "Virtual Reality Developer, E-Learning Design Center",
      items: [
        "• Creating Virtual Reality Training Simulations for Medical Students, officials and paramedics.",
        "• Simulations are made using Unreal Engine and Targeted for the Oculus Quest 2.",
        "• Created Modules covering Situations such as Respiratory Assessments, anaphylaxis and arthrocentesis.",
        "• Created Trade Skill VR Simulations for HVAC Trainees under ImmerseLearn Product Line.",
      ]
    },
    {
      title: "Project TitleGame Developer [Intern], Akiyam Solutions",
      items: [
        "• Interned on a Stealth Action Game Project: Assassin: The First List; as UI/UX developer",
        "• Added accessibility options and multi-language translations for all UI elements in more than 7 languages",
        "• Used UE’s Xsolla extension to enable In-game currency and microtransaction system. Added 75+ Items and packs in store page.",
        "• Created Steam Page for the Game and added over 40 achievements.",
      ]
    },
  ]

  return (
    <div className="magic-center gap-10 mb-20">
      <div className="md:w-[60%] magic-center gap-10">
        <Hero
          h1="About Soumil Biswas."
          h3="Who, what and where. Maybe even why."
        />
        {/* Work Experience */}
        {items.map((item, index) => (
          <ItemEntry
            key={index}
            item={item}
            index={index}
          />      
        ))}
      </div>

      {/* Mention knack for design and cinematography */}
      <div className="grid [grid-template-areas:'stack'] xs:w-[90vw]">
        <div className="[grid-area:stack] flex flex-col sm:flex-row gap-10 items-end mt-[200px]">
          <img className="object-contain w-[60%]" src="/images/homeTitleCard/rvl-4k-dvdr.jpg" alt="img-1" />
          <div className="magic-center sm:justify-center w-full h-full sm:pt-32">
            <p className="font-inter italic text-center text-balance">Development is a means to turn design into reality. This is where is all begins for real.</p>
          </div>
        </div>
        <div className="w-[90%] flex flex-col sm:flex-row items-start gap-5 [grid-area:stack]">
          <AestheticLuknAss line1="A knack for design" line2="..and cinematography"/>
          <img className="w-[70%] object-contain" src="/images/Zeon.jpg" alt="img-1" />
        </div>
      </div>

      {/* Plug in youtube stuff */}
      <div className="grid [grid-template-areas:'stack'] w-[80vw]">
        <div className="[grid-area:stack] justify-self-center self-start">
          <AestheticLuknAss line1="My Foray into YouTube"/>
        </div>
        <a 
          className="[grid-area:stack] w-full max-w-[570px] aspect-video place-self-center mt-[25%] md:mt-48 rounded-3xl duration-300 hover:[box-shadow:inset_0_0_15px_5px_var(--highlight-color)] bg-cover outline outline-2 outline-[--shadow-color-offset]" 
          style={{backgroundImage:`url("/screenshots/21-9copy.jpg")`}} 
          href="https://soumil-biswas-web.github.io/DVDR/"
        > </a>
      </div>
    </div>
  );
};

export default AboutUs;
