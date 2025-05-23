import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function HomeTitleCard({card}) {

  const [isHovered, setIsHovered] = useState(false);  

  // Preload hover image when the component mounts
  useEffect(() => {
    const img = new Image();
    img.src = card.hoverImg;
  }, [card.hoverImg]);

  return (
    <Link
      className="magic-center gap-5 bg-[--highlight-color] hover:bg-[--highlight-hover-color] duration-300 h-[450px] p-3 rounded-2xl shadow-lg shadow-[--shadow-color] home-title-card transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={card.to}
      {...(!card.to.startsWith('/') && {target:'_blank'})} 
    >
        <div
            className="w-full md:w-[25vw] max-w-[400px] h-[200px] md:h-[25vh] max-h-[225px] rounded-xl bg-cover bg-center transition-all duration-[400ms]"
            style={{
            backgroundImage: `url(${isHovered ? card.hoverImg : card.img})`,
            }}
        ></div>
        <h2>{card.title}</h2>
        <p className='text-center text-balance max-w-[70%]'>{card.desc}</p>
    </Link>
  )
}
