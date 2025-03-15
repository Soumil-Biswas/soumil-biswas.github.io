import React from 'react'
import Custom1 from './Custom1'

const Part6 = ({data}) => {
  const imageSteps=[
      "/services/img7.webp",
       "/services/img8.webp",
        "/services/img9.webp",
    ]
  return (
    <div id='section4'  className='my-5 w-full '>
      <h2 className='text-3xl font-bold'>{data.heading}</h2>
      <ul className='text-lg my-3'>{
        data.content.map((item,index)=> <li key={index} className='my-2'><span className='font-bold'>{item.bold}{" : "}</span>{item.text}</li>)
        }</ul>

        <div className='w-full flex flex-col justify-center items-center'>
        
             <Custom1 images={imageSteps} color={"blue"}/>
        
       
        <ul className='flex md:text-2xl text-sm text-center  md:gap-56 gap-14'>{data.content.map((item,index)=> <li key={index} className='font-bold  w-min'>{item.bold}</li>)}</ul>
        </div>
       
    </div>
  )
}

export default Part6
