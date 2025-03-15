import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function EmailVerified() {

  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  if (token) localStorage.setItem('token', token)

  return (
    <div className="mt-24 h-screen px-3 w-full text-zinc-800 text-center relative top-12 md:top-0">
      <DotLottieReact
        src="https://lottie.host/9b20db0b-3e5e-461b-90a0-e65363bdde26/izg5UqcBO6.lottie"
        speed={0.5}
        autoplay
        className='w-full mx-auto md:w-1/2'
      />
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Email Verification Successful</h2>
      <p className='mb-6 text-sm md:text-base'>You have successfully verified your email account. You may now go to home or leave this page.</p>

      <Link className="" to="/">
        <button className="bg-[#1C4476] text-white p-medium px-6 py-2 rounded-full hover:bg-blue-600 transition duration-500">
          Go Home
        </button>
      </Link>
    </div>
  )
}