import React from 'react'

export default function AestheticLuknAss({line1, line2}) {
  return (
    <div className="grid [grid-template-areas:'stack'] shrink-0">
        <div className="bg-rose-600 w-0.5 h-[500px] [grid-area:stack] mr-20 self-start justify-self-end"></div>
        <div className="[grid-area:stack] mt-20">
        <p className="text-7xl font-inter font-extralight pr-20">{line1}</p>
        <div className="bg-slate-600 h-1 w-full my-2"></div>
        <p className="text-7xl font-inter font-extralight">	&nbsp;	&nbsp;	&nbsp;{line2}</p>
        </div>
    </div>
  )
}
