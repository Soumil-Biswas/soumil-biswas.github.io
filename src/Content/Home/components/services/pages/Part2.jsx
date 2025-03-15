import React from 'react'
import Custom1 from './Custom1'

const Part2 = ({data}) => {
    const newData=["Document Preparation","Form completion","Schedule Interview"]
    const imageSteps=[
      "/services/img1.webp",
       "/services/img2.webp",
        "/services/img3.webp",
    ]
  return (
    <div className='my-5'>

    <div id='section1' className='md:my-16 my-5 w-full  '>
      <h2 className='text-3xl font-bold'>{data.title}</h2>
      <p className='md:text-lg my-3 text-sm '>{data.description}</p>
      <ul className='md:text-lg text-sm'>{data.content.map((item,index)=> (
        <div key={index} className='flex items-center gap-3 mb-5'>
            <div className='bg-[#D9D9D9] rounded-full p-2 object-cover w-12'>
                 <img src={"/Vector.webp"} className='w-8 ' alt=""/>
            </div>
           
            <p><span className='font-bold'>{item.bold}{" : "}</span>{item.text}</p>
        </div>
      ))}</ul>

        <div className='w-full flex flex-col  items-center'>
         
          {/* <Custom/> */}
        <Custom1 images={imageSteps} color={"yellow"}/>
      
        
        
          <ul className='flex  md:gap-44 text-center gap-8'>
        {
         newData.map((item,index)=> <li key={index} className='md:text-2xl text-sm font-bold w-min'>{item}</li>)   
        }
    </ul>
        </div>
       
        </div>
        
    

    
    </div>
    
    
  )
}

export default Part2
