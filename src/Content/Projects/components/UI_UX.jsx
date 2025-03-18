import React, { useState } from 'react'
import BehanceLink from './BehanceLink'
import Slideshow from '../../../Components/Slideshow'

// Dynamically import all images from the "screenshots" folder
const images = import.meta.glob('/public/screenshots/**/*.png', { eager: true });

// Convert the imported files into an array
const imagePaths = Object.keys(images);

export default function UI_UX() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const uiProjects = [
        {
            name: "AssassinTheFirstList1",
            thumbnail: (imagePaths.filter(path => path.includes("UltimateMainMenu")))[2],
            cards: imagePaths.filter(path => path.includes("UltimateMainMenu")),
        },
        {
            name: "AssassinTheFirstList2",
            thumbnail: imagePaths.find(path => path.includes("ProMainMenuV3")),
            cards: imagePaths.filter(path => path.includes("ProMainMenuV3")),
        },
    ]

  return (

    <div className='magic-center gap-10 mb-10'>
        <div className="flex gap-10">
            {uiProjects.map((item, index) => (
                <button 
                    key={index}
                    onClick={() => {
                        setCurrentIndex(index)
                    }}
                    className={`rounded-xl w-[30vw] max-w-[400px] ${
                        (index == currentIndex) && "shadow-lg shadow-[--shadow-color-offset]"
                    }`}
                >
                    <img                        
                        className="object-cover h-full rounded-xl outline outline-2 outline-transparent hover:outline-[--contrast-color] duration-500" 
                        src={item.thumbnail} 
                        alt={item.name} 
                    />
                </button>
            ))}
            <BehanceLink/>
        </div>
        
        {/* Slideshow pages */}
        <div className="w-[80%] overflow-x-hidden">
            <div className={`w-[200%] flex overflow-x-hidden duration-300 ${
                (currentIndex == 0) ? " translate-x-0" : " -translate-x-[50%]"
            }`}>
                <div className="flex-1">
                    <Slideshow 
                        cards={uiProjects[0].cards}
                    />
                </div>
                <div className="flex-1">
                    <Slideshow 
                        cards={uiProjects[1].cards}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
