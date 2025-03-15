import React from 'react'
import { Link } from "react-router-dom"

const OurServices = ({data}) => {
  return (
    <div className='relative mt-16'>
      <img src={"/Ellipse 5.webp"} className='absolute top-52  h-[570px] w-full' alt="service-icon"/>
      <h2 className='text-center text-3xl font-bold'>{data.mainTitle}</h2>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-24 mx-4 md:mt-8 mt-5 justify-items-center'>
          {data.content.map((item,index)=>(
            <Link to={item.redirect} key={index} className='group relative bg-gray-50 rounded-xl text-center shadow-lg xl:w-[330px] px-5 py-11 flex flex-col items-center hover:-translate-y-2 duration-300'>

                <div className=''>

                  <svg viewBox="0 0 79 79" xmlns="http://www.w3.org/2000/svg" className='w-16 absolute left-0 top-0 fill-[#D9D9D9] group-hover:fill-[#202A44] duration-300'>
                    <path d="M0 13C0 5.8203 5.8203 0 13 0H79C79 43.6305 43.6305 79 0 79V13Z"/>
                  </svg>

                  <svg
                   viewBox={item.viewBox} 
                   xmlns="http://www.w3.org/2000/svg"
                   className={`w-8 absolute left-3 top-3 duration-300 transition-all ${
                    (index === 3 || index === 5)
                      ? "fill-black group-hover:fill-white"
                      : "fill-transparent stroke-black group-hover:stroke-white"
                   }`}>
                    {
                      item.paths.map((path,index)=>  
                     <path key={index}
                       
                      d={path.d}
                      strokeWidth={path.strokeWidth}
                      strokeLinecap={path.strokeLinecap}
                      strokeLinejoin={path.strokeLinejoin}
                      strokeMiterlimit={path.strokeMiterlimit}
                      /> 
                    )}                  
                  </svg>
                </div>
                <div className='flex flex-col items-center justify-between h-full'>
                  <h3 className='text-xl font-bold my-2'>{item.title}</h3>
                  <p className='pb-5'>{item.description}</p>
                  <div className='flex flex-col items-center w-full'>
                    <hr className='mb-2 border-b-2 w-full'/>
                    <svg width="32" height="28" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" className='w-7 group-hover:translate-x-2 fill-[#D9D9D9] group-hover:fill-[#202A44] duration-300'>
                      <path d="M13.3476 1.856L14.903 0.447343C15.5617 -0.149114 16.6267 -0.149114 17.2783 0.447343L30.8991 12.7762C31.5577 13.3727 31.5577 14.3372 30.8991 14.9273L17.2783 27.2625C16.6197 27.859 15.5547 27.859 14.903 27.2625L13.3476 25.8539C12.682 25.2511 12.696 24.2676 13.3756 23.6774L21.8186 16.3931H1.68159C0.749707 16.3931 0 15.7141 0 14.8702V12.8397C0 11.9958 0.749707 11.3168 1.68159 11.3168H21.8186L13.3756 4.03243C12.689 3.44232 12.6749 2.4588 13.3476 1.856Z"/>
                    </svg>
                  </div>
                </div>                  

            </Link>
          )) }
      </div>


        </div>


      
   
  )
}

export default OurServices
