import React from 'react'
import Section from './pages/Section'

const Quote = () => {

    const data={
        title:"Get Your Personalized Visa Consultation Quote Today!",
        description:"Preparing for a US visa interview can be nerve-wracking. At visaSprint, we provide personalized 1:1 mock interview sessions to help you succeed. Practice with experts who guide you through common questions, boost your confidence, and prepare you for the big day.",
        features:{
            title:"Key Features",
             content: [
            { bold: "Unlimited Sessions:", text: "Practice as many times as you need." },
            { bold: "Personalized Coaching:", text: "Tailored sessions based on your visa type." },
            { bold: "Expert Feedback:", text: "Improve your performance with actionable advice." }
        ]
        }
    }
  return (
    <div className='my-10 lg:mx-20 sm:mx-5 mx-3'>
      <h1 className='md:text-2xl text-xl font-bold mt-3 mb-5'>{data.title}</h1>
      <p className='mb-5 md:text-lg text-base'>{data.description}</p>
      <h2 className='font-bold md:text-xl text-lg mb-3'>{data.features.title}</h2>
      <ul>{data.features.content.map((feature,index)=> 
        <li key={index} className='mb-2 md:text-lg text-base'>
            <strong>{feature.bold}</strong>&nbsp;&nbsp;{feature.text}</li>)}
        </ul>
        <Section/>
    </div>
  )
}

export default Quote
