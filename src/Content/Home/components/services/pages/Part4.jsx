import React from 'react'
import Custom1 from './Custom1'

const Part4 = ({data}) => {
    const newData=["Slot Monitoring","Reserve Scheduling","Confirmation Notification"]
    const imageSteps=[
      "/services/img4.webp",
       "/services/img5.webp",
        "/services/img6.webp",
    ]
  return (
    <>
      <div className='my-5 w-full '>
      <h2 className='text-3xl font-bold'>{data.title}</h2>
     
      <ul className='md:text-lg mt-3'>{data.content.map((item,index)=> (
        <div key={index} className='flex items-center gap-3 mb-5'>
            <div className='bg-[#D9D9D9] rounded-full shrink-0 p-2 object-cover w-12'>
                 <img src={"/Vector.webp"} className='w-8 ' alt="vector"/>
            </div>
           
            <p className=''><span className='font-bold'>{item.bold}</span>{item.text}</p>
        </div>
      ))}</ul>
    </div>

      <div className='w-full flex flex-col  items-center'>
        
       {/* <Custom/> */}
       <Custom1 images={imageSteps} color={"green"}/>
   
          <ul className='flex  md:gap-40 text-center  gap-8 '>
        {
         newData.map((item,index)=> <li key={index} className='md:text-2xl text-sm font-bold w-min'>{item}</li>)   
        }
    </ul>
        </div>

      

  
    </>
  )
}

export default Part4
