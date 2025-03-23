import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({item}) {
  return (
    <Link
        to={item.to}
        className='rounded-xl w-[65vw] sm:w-[25vw] lg:w-[30vw] max-w-[400px] aspect-video border-[--highlight-color] hover:border-[--highlight-hover-color] border-4 hover:-translate-y-2 duration-500'
    >
        <img 
            src={item.img} 
            alt={item.name} 
            className='object-cover w-full rounded-lg outline outline-2 outline-transparent hover:outline-[--contrast-color] duration-500'
        />
    </Link>
  )
}
