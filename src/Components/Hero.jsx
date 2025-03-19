import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Hero({h1, h3}) {

  const location = useLocation();

  return (
    <div className="magic-center py-8 text-center">
        <h1 className={(location.pathname == "/") && "text-2xl md:text-4xl"}>{h1}</h1>
        <h3>{h3}</h3>
    </div>
  )
}
