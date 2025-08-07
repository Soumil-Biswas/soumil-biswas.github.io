import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({item, index}) {
  return (
    <Link
        to={item.to}
        target='_blank' 
        // className='rounded-xl w-[65vw] sm:w-[25vw] lg:w-[30vw] max-w-[400px] aspect-video border-[--highlight-color] hover:border-[--highlight-hover-color] border-4 hover:-translate-y-2 duration-500'
        className={`group flex ${(index % 2 === 0) ? "justify-start" : "justify-end"} rounded-xl w-[98vw] lg:w-[90vw] xl:w-[85vw] bg-transparent hover:bg-[--highlight-color] hover:-translate-y-2 duration-500`}
    >
        <div className={`flex flex-col ${(index % 2 === 0) ? "sm:flex-row" : "sm:flex-row-reverse"} p-5 lg:p-8 xl:p-10 gap-10 justify-between w-full`}>
            <div className={`flex flex-col justify-center w-full sm:max-w-[60%] gap-5 sm:text-left ${(index % 2 === 0) ? "text-left" : "text-right"}`}>
                <p className='text-3xl'>{item.name}</p>
                <p>{item.desc}</p>
                <p className='group-hover:text-[--contrast-color] duration-500'>{"Click to view Project! >>"}</p>
            </div> 
            <div className='rounded-xl w-full sm:w-[80vw] max-w-[600px] aspect-video'>
              <img 
                  src={item.img} 
                  alt={item.name} 
                  className='object-cover w-full rounded-lg duration-500'
              />
            </div>
        </div>
    </Link>
  )
}
