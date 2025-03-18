import React from 'react'

export default function ItemEntry({item, index}) {
  return (
    <div className={`flex w-full ${
        (index % 2 === 0) ? "justify-start" : "justify-end"
    }`}>
        <div className="w-full max-w-[690px] bg-[--background-color-offset] p-10 rounded-3xl">
            <p className='text-2xl'>{item.title}</p>
            <ul>
                {item.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
