import ItemEntry from "./components/ItemEntry";
import Hero from "../../Components/Hero";

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
    <div className="w-[90%] magic-center gap-10 my-20">
      <Hero
        h1="About Soumil Biswas."
        h3="Who, what and where. Maybe even why."
      />

      {items.map((item, index) => (
        <ItemEntry
          key={index}
          item={item}
          index={index}
        />

        // Work Experience

        // Mention knack for design and cinematography

        // Plug in youtube stuff
      ))}
    </div>
  );
};

export default AboutUs;
