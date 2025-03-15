import React from 'react'
import Custom1 from './Custom1'

const Part7 = ({data}) => {
   const newData=["Reserve Scheduling","Confirmation Notification"]
    const imageSteps=[
      "/services/img13.webp",
       "/services/img14.webp",
       
    ]
  return (
    <div id='section5' className='my-8 w-full '>
       <h2 className='text-3xl font-bold'>{data.heading}</h2>
      <ul className='text-lg my-3'>{
        data.content.map((item,index)=> <li key={index} className='my-2'><span className='font-bold'>{item.bold}{" : "}</span>{item.text}</li>)
        }</ul>
        <div className='w-full flex flex-col justify-center items-center'>
        
          <Custom1 images={imageSteps} color={"pink"}/>
        
        
         
          <ul className='flex md:gap-32 gap-10 md:mx-0 mx-10 text-center'>
        {
         newData.map((item,index)=> <li key={index} className='md:text-2xl text-sm font-bold w-min'>{item}</li>)   
        }
    </ul>
        </div>
        </div>
       
    
  )
}

export default Part7
