import React, { useState } from 'react'
import Hero from '../../Components/Hero'
import UI_UX from './components/UI_UX'

export default function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["UI/UX Designs", "3D Modelling", "Art/Sketches"]

  return (
    <div>
      <Hero
        h1="Projects"
        h3="All Design Undertakings in one place."
      />

      <div className="magic-center gap-20">
        {/* Main Tab Selector */}
        <div className="flex gap-4">
            {tabs.map((tab, index) => (
                <button 
                    key={index} 
                    onClick={() => {
                      setCurrentIndex(index)
                    }}                    
                    className={`rounded-full border-2 border-[--contrast-color-offset] hover:border-[--contrast-color] p-4 w-[250px] ${
                      (index == currentIndex) && "shadow-lg shadow-[--shadow-color-offset]"
                    }`}
                >{tab}</button>
            ))}
        </div>

        <UI_UX/>
      </div>
    </div>
  )
}
