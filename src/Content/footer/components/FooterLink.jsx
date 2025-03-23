import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function FooterLink({contact}) {
    
  const [isHovered, setIsHovered] = useState(false);  

  // Preload hover image when the component mounts
  useEffect(() => {
    const img = new Image();
    img.src = contact.hoverImg;
  }, [contact.hoverImg]);  
    
  return (
    <Link
      className={`w-10 rounded-full ${(contact.name === "DVDR") && "bg-black"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={contact.url}
    >
        <div 
        className="w-10 h-10 bg-cover rounded-full transition-all duration-300"
        style={{
            backgroundImage: `url(${isHovered ? contact.hoverIcon : contact.icon})`,
        }}                    
        ></div>
    </Link>
  )
}
