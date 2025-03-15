import React from 'react'

const Custom1 = ({images,color,section}) => {
  return (
    <div className='flex '>
      {
        images.map((image,index)=> (
            <div key={index} className='flex items-center'>

              {/* image */}
                <div   className={`md:w-20 md:h-20 w-10 h-12 p-2   md:p-4 ${color === "yellow" && "bg-[#FFC0A5] rounded-xl  "} ${color === "green" && "bg-[#88CB9D] rounded-full "} ${color === "pink" && "bg-[#FFABAB] rounded-full" } ${color === "blue" && "bg-[#AFDCFF] rounded-full "}`}>
                    <img src={image} className="md:w-12 md:h-12 w-8 h-8  shrink-0 object-con" alt='service-icon' />
                    </div>
                    
               {/* dashed line */}
                   {
                    index < images.length-1  && <div className={`border-t-4 border-dashed border-black  ${
    section === 6
      ? "md:w-20 w-8 lg:w-28"
      : "lg:w-56 md:w-56 w-20"
  }`}>

                         </div>
                }
                
               
            </div>
        ))
      }
    </div>
  )
}

export default Custom1
