import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className=''>
      {
        data.map((service,index)=> (
            <div key={index} className='mb-3 lg:w-72 h-32 md:w-full w-10/12 border rounded-md border-black relative shadow-lg '>
                 <p className='font-bold text-xl  lg:px-7 pl-8 lg:py-2 py-3 '>{service}</p>  
                 <img src={"/home/service-vector.webp"} className='absolute top-7 -left-6 bg-gray-100  shadow-md  w-12 border border-black rounded-full p-2 object-cover'/> 
            </div>
        ))
      }
    </div>
  )
}

export default ServiceCard
