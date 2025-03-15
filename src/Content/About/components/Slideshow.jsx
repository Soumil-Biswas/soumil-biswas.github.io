import React, { useState, useEffect } from 'react'


export default function Slideshow({data}) {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); // Check if screen size is md: or larger
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  }, []);

  function AutoSlider() {
    setCurrentIndex((prevIndex) => (prevIndex >= 4 ? 1 : prevIndex + 1));
  }

  function onClickSlider (id) {
    setCurrentIndex(id)
  }

  useEffect(() => {
    const interval = setInterval(AutoSlider, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-[100vw] md:w-[768px] xl:w-[60%]">
        <div className="flex flex-col md:flex-row items-center md:[align-items:normal] w-full md:[aspect-ratio:60/30] md:overflow-x-hidden">
            {data.offerings.map((offer) => (
            <div
                key={offer.id}
                className={`py-6 px-10 my-10 w-[80%] md:[aspect-ratio:60/25] md:mx-[10%] rounded-lg shadow-[0px_4px_25px_0px_#00000040] bg-[#B6DFE8] flex flex-col justify-center transition-transform duration-300`}
                style={isMdScreen ? {transform: `translateX(${-126.5 * (currentIndex - 1)}%)`} : {}}
            >
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <p className="text-gray-800 mt-2">{offer.description}</p>
            </div>
            ))}
        </div>
        <div className='hidden md:flex md:w-[768px] justify-center gap-1'>
            {data.offerings.map((offer) => (
               <button key={offer.id} onClick={() => {onClickSlider(offer.id)}} className={`h-3 aspect-square rounded-full ${
                (currentIndex === offer.id) ? "bg-[#626161]" : "bg-[#D9D9D9]"
               }`}></button> 
            ))}
        </div>
    </div>
  )
}
