import React from 'react'

export default function AestheticLuknAss({line1, line2}) {
  return (
    <div className="grid [grid-template-areas:'stack'] shrink-0">
        <div className="bg-rose-600 w-0.5 h-[500px] [grid-area:stack] ml-10 sm:ml-0 sm:mr-20 self-start sm:justify-self-end"></div>
        <div className="[grid-area:stack] mt-20">
        <p className="text-2xl sm:text-4xl lg:text-7xl text-center sm:text-right font-inter font-extralight xs:pr-20">{line1}</p>
        <div className="bg-slate-600 h-1 w-full my-2"></div>
        <p className="text-2xl sm:text-4xl lg:text-7xl font-inter font-extralight">	&nbsp;	&nbsp;	&nbsp;{line2}</p>
        </div>
    </div>
  )
}
