import React from 'react'
import StarRate from './StarRate'

const Feedbacks = ({data}) => {

  return (
    <div className='mt-16'>
    
      <h2 className='text-center font-bold text-2xl'>{data.title}</h2>
      <p className='text-center'>{data.des}</p>
      <ul className='grid lg:grid-cols-3  grid-cols-1 lg:mx-40 mx-10 gap-3 mt-6 '>{
        data.details.map( (detail,index)=>(
            <div key={index} className='text-center  ' >
                <img src={detail.img} alt='' className=' w-52 rounded-full mx-auto'/>
                <h3  className=' my-2'>{detail.name}</h3>
                <p>{detail.des}</p>
                <StarRate  limit={5} rating={2}/>
            </div>
        ))
        }
       
      </ul>
    </div>
  )
}

export default Feedbacks
