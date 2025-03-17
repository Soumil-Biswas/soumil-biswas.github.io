import React, {useState} from 'react'

export default function ContactItem({contact}) {

  const [isHovered, setIsHovered] = useState(false); 

  return (
    <button className='group w-[920px] relative overflow-y-hidden rounded-[20px]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`absolute h-full top-0 left-0 w-0 z-0 group-hover:w-full transition-all duration-700 ${contact.color} rounded-[20px]`}></span>
      <div className='flex items-center gap-12 rounded-[20px] bg-[--highlight-color] px-2'>
          <div
              className="w-20 m-2.5 aspect-square rounded-xl mb-2 bg-contain bg-no-repeat bg-center transition-all duration-[400ms] z-[1]"
              style={{
              backgroundImage: `url(${isHovered ? contact.hoverIcon : contact.icon})`,
              }}
          ></div>
          <p className='text-[70px] z-[1] group-hover:text-white leading-none'>{contact.detail}</p>
      </div>
    </button>
  )
}
