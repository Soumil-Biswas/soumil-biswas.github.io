import React from 'react'
import ServiceCard from './ServiceCard'

const part1 = ({services}) => {
  return (
    <div className='md:pl-2  ml-8 my-3'>
         <div className='lg:flex-row flex items-center  flex-col lg:gap-9 mt-10'>
    
      <ServiceCard data={services.slice(0,3)}/>

      {/* image section */}
      <div className='  lg:w-4/12 md:w-full  w-10/12 relative  my-10 md:mb-5    '>
        <div >
             <img src={'/home/Rectangle 53.webp'} />
        </div>
        <div className='absolute -top-1 lg:left-7 md:left-10 left-6'>
             <img src={'/home/Rectangle 35.webp'} className='lg:w-64 md:w-[300px] w-48'/>
        </div>
      </div>

      <ServiceCard data={services.slice(3,services.length)}/>
    </div>
    </div>
 
  )
}

export default part1
