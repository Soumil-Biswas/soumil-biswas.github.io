import React, { useState } from 'react'
import BehanceLink from './BehanceLink'
import Slideshow from '../../../Components/Slideshow'

export default function UI_UX() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const uiProjects = [
        {
            name: "UltimateMainMenu",
            folder: "UltimateMainMenu", // Folder name
            thumbnail: "/screenshots/UltimateMainMenu/img3.png", // Manually set a main thumbnail
        },
        {
            name: "ProMainMenuV3",
            folder: "ProMainMenuV3",
            thumbnail: "/screenshots/ProMainMenuV3/img1.png",
        }
    ];

    function getImagePaths(folder, count) {
        return Array.from({ length: count }, (_, index) => 
            `/screenshots/${folder}/img${index + 1}.png`
        );
    }
    
    const projectsWithImages = uiProjects.map(project => ({
        ...project,
        cards: getImagePaths(project.folder, 8) // Change `4` to the number of images in each folder
    }));

  return (

    <div className='magic-center gap-10 mb-10'>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            {projectsWithImages.map((item, index) => (
                <button 
                    key={index}
                    onClick={() => {
                        setCurrentIndex(index)
                    }}
                    className={`rounded-xl w-[50vw] sm:w-[25vw] lg:w-[30vw] max-w-[400px] aspect-video ${
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
        <div className="w-[95%] overflow-x-hidden">
            <div className={`w-[200%] flex overflow-x-hidden duration-300 ${
                (currentIndex == 0) ? " translate-x-0" : " -translate-x-[50%]"
            }`}>
                <div className="flex-1">
                    <Slideshow 
                        cards={projectsWithImages[0].cards}
                    />
                </div>
                <div className="flex-1">
                    <Slideshow 
                        cards={projectsWithImages[1].cards}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
