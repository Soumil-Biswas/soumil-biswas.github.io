import React from 'react'
import Custom1 from './Custom1'

const Part8 = ({data}) => {
    const{title,description,content}=data
    const imageSteps=[
      "/services/img15.webp",
       "/services/img16.webp",
        "/services/img17.webp",
         "/services/img18.webp",
    ]
  return (
    <div  id='section6' className='md:my-10 my-5 w-full '>
       <h2 className='text-3xl font-bold'>{title}</h2>
      <p className='md:text-lg my-3 text-sm '>{description}</p>
      <ul className='md:text-lg text-sm'>{content.map((item,index)=> (
        <div key={index} className='flex items-center gap-3 mb-5'>
            <div className='bg-[#D9D9D9] rounded-full p-2 object-cover w-12'>
                 <img src={"/Vector.webp"} className='w-8 ' alt="vector"/>
            </div>
           
            <p><span className='font-bold'>{item.bold}{" : "}</span>{item.text}</p>
        </div>
      ))}</ul>

<div className='w-full flex flex-col justify-center items-center'>
       
          {/* <Custom/> */}
        <Custom1 images={imageSteps} color={"blue"} section={6}/>
        
        
       
          <ul className='flex text-center  lg:gap-20 md:gap-20 gap-3'>
        {
         content.map((item,index)=> <li key={index} className='lg:text-2xl  md:text-sm text-xs md:font-bold font-extrabold w-min'>{item.bold}</li>)   
        }
    </ul>
        </div>
</div>
      
       
    

      
    
  )
}

export default Part8
