import React from 'react'

const Section4 = ({data}) => {
    const{title,features,additionalSection}=data
  return (
    <div className='my-3'>
      {/* Main Title */}
      <h2 className='lg:text-3xl md:text-2xl text-xl font-bold my-3'>{title}</h2>

      {/* Features Section */}
      {features.map((feature,index) => (
        <div key={feature.id} className="lg:text-lg md:text-base text-sm my-5">
          <h3 className='lg:text-2xl md:text-xl text-lg font-bold '>{index+1}{". "}{feature.heading}</h3>
          <ul className=''>
            {feature.description.map((desc, index) => (
              <div key={index} className='my-3 flex items-center  gap-2'>
              &nbsp; &nbsp; <div className='bg-black rounded-full p-1' >
                    {/* <img src={"/Vector.webp"} className='w-5 h-5 '/> */}
                 </div>
                   <li  className='my-1'>{desc}</li>
              </div>
             
            ))}
          </ul>
        </div>
      ))}

      {/* Additional Section */}
      <div className="my-5 md:text-lg text-sm">
        <h2 className='lg:text-3xl md:text-2xl text-xl font-bold my-3'>{additionalSection.title}</h2>
        {additionalSection.description.map((desc, index) => (
          <p key={index} >{desc}</p>
        ))}
        <h3 className='lg:text-2xl md:text-xl text-lg font-bold mt-2'>{additionalSection.callToAction.heading}</h3>
        <p>{additionalSection.callToAction.text}</p>
      </div>
    </div>
  )
}

export default Section4
