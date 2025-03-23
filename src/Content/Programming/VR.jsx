import React from 'react'
import Hero from '../../Components/Hero';
import ItemCard from './components/ItemCard';

export default function VR() {

  const medVRWork = [
        {
            name: "EMS Anaplylaxis",
            img: "https://medvr.education/wp-content/uploads/2024/06/EMS-Anaphylaxis.jpg",
            to: "https://medvr.education/solution/ems-anaphylaxis/",
        },
        {
            name: "Knee Arthrocentesis",
            img: "https://medvr.education/wp-content/uploads/2024/07/banner.01_28_23_02.Still012-1.png",
            to: "https://medvr.education/solution/knee-arthrocentesis/",
        },
        {
            name: "Verbal De-escalation",
            img: "https://medvr.education/wp-content/uploads/2024/09/resized-image.png",
            to: "https://medvr.education/solution/verbal-de-escalation-calm-to-angry/",
        },
        {
            name: "Pilonidal Abcess Removal",
            img: "https://medvr.education/wp-content/uploads/2024/09/banner.00_26_41_19.Still007-1.png",
            to: "https://medvr.education/solution/pilonidal-abscess-removal/",
        },
        {
            name: "ED Thoracotomy",
            img: "https://medvr.education/wp-content/uploads/2024/10/tutorial.00_09_45_30.Still001-1.png",
            to: "https://medvr.education/solution/ed-thoracotomy/",
        },
        {
            name: "Male Genitourinary Assessment",
            img: "https://medvr.education/wp-content/uploads/2024/10/Male-g-500.jpg",
            to: "https://medvr.education/solution/male-genitourinary-assessment/",
        },
  ];

  const immerseLearnWork = [
        {
            name: "HVAC Tools and Equipment",
            img: "https://immerselearn.com/wp-content/uploads/2025/02/Micro-HVAC-THumb-tools-equip.jpg",
            to: "https://immerselearn.com/hvac-tools-and-equipment/",
        },
        {
            name: "Plumbing Tools and Equipment",
            img: "https://immerselearn.com/wp-content/uploads/2025/02/Plumbing-micro-tools-equip.jpg",
            to: "https://immerselearn.com/plumbing-tools-and-equipment/",
        },
  ];  
    

  return (
    <div className='magic-center mb-[100px] grow gap-16'>
      <Hero
        h1="VR Development"
        h3="Stint in Virtual Reality Simulations under E-Learning Design Center"
      />

      <div className="magic-center">
        <Hero
            h1="MedVR"
            h3="Training Simulations for aspiring medical professionals"
        />
        <div className="flex flex-wrap justify-center gap-5 mb-8">
            {medVRWork.map((item, index) => (
                <ItemCard key={index} item={item}/>
            ))}
        </div>
      </div>

      <div className="magic-center">
        <Hero
            h1="ImmerseLearn"
            h3="Participation lies only to the extent of initial prototyping."
        />
        <div className="flex flex-wrap justify-center gap-5 mb-8">
            {immerseLearnWork.map((item, index) => (
                <ItemCard key={index} item={item}/>
            ))}
        </div>
      </div>
    </div>
  )
}
