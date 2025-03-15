import React from 'react'
import Custom1 from './Custom1'

const Part5 = ({data}) => {
   const imageSteps=[
      "/services/img10.webp",
       "/services/img11.webp",
        "/services/img12.webp",
    ]
  return (
    <div id='section3' className=' md:text-xl text-base my-10 w-full '>
      <h2 className='text-3xl font-bold mb-2'>{data.mainTitle}</h2>
      <p >{data.description}</p>
      <h3 className='text-2xl font-bold mt-5 mb-2'>{data.title}</h3>
      <p className=''>{data.subDescription}</p>

      {/* cards */}
       <div className='flex md:flex-row flex-col gap-5 my-5 items-center'>
        {
          data.cards.map((card,index)=>(
          
            <div key={index} className='bg-white  md:w-6/12 w-full lg:h-44 h-48 md:p-4 p-7   lg:p-5 shadow-lg rounded-3xl'>
              <h4 className='text-xl font-bold'><span className={` text-white px-2.5 py-1 mr-3  rounded-full ${index === 0 ? "bg-red-600":"bg-green-600"}`}>{index+1}</span>{card.heading}</h4>
              <p className='md:m-3 m-4'>{card.text}</p>
            </div>
          ))
        }
       </div>


      <>
        <h3 className='text-2xl font-bold mt-5'>{data.subTitle}</h3>
        <p className='md:text-xl text-base font-bold mt-3'>{data.content}</p>
        <div className='flex md:flex-row flex-col gap-8 items-center  md:my-5 my-3 text-xl'>
          {/* left section */}
            <ul className='md:w-8/12 w-full'>{data.details.map((detail,index)=> <li key={index} className='my-5 md:text-lg text-sm'><span className='font-bold '>{detail.bold}{" : "}</span>{detail.text}</li>)}</ul>
            
            {/* right section */}
              <div className='flex md:flex-row flex-col items-center '>
                {/* desktop view */}
        <div className='md:block hidden'>
          {imageSteps.map( (img,index)=> (
            <div key={index} className='flex flex-col items-center'>
              <div className='bg-[#FFABAB] md:w-20 w-12 p-4 rounded-3xl'>
                 <img src={img} className="md:w-12 md:h-12 w-8 h-8 shrink-0" alt="icon"/>

                
              </div>
            {
              index <=1 && <img src="/services/Line 34.webp" className='w-1 object-cover h-14'/>
            }
               
            </div>
          ))}
        </div>

          {/* mobile view */}
        <div className='md:hidden visible md:mt-0 md:mb-0 -mt-5 mb-2'>
          <Custom1 images={imageSteps} color={"pink"}/>
        </div>
     
    
    <ul className='flex md:flex-col flex-row md:gap-y-24 md:ml-3 gap-10'>{
        data.details.map((item,index)=> <li key={index} className='font-bold md:text-2xl text-sm w-min'>{item.bold}</li>)
        }</ul>
            </div>
            
       
              </div>
       
    
            
           
        
        <p className='font-bold mb-2'>{data.notification1}</p>
        <h3 className='font-bold md:text-2xl text-lg mt-3 mb-1'>{data.nextTitle}</h3>
        <ul>
          {
            data.notifications.map( (notification,index)=> <li key={index} className='my-2 md:text-lg text-sm'><span className='font-bold'>{notification.bold}{" : "}</span>{notification.text}</li>)
          }
        </ul>
         {/* <ul>{
            data.channels.map((channel,index)=> <li key={index} className='mb-2 underline'><Link to={channel.redirect} target='_blank'>{channel.name}</Link></li>)
            }</ul> */}
      </>
    </div>
  )
}

export default Part5
