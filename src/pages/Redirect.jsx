import React from 'react'
import { Link } from 'react-router-dom'
import Quiz from './Quiz'
const Redirect = () => {
  return (
       <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='text-red-500 font-semibold text-5xl pb-4'>Note!</h1>
        <div className='h-6 w-36 bg-[#000e3b] rounded-lg mb-6'><div className='animate-moveBackForth p-3 rounded-full w-5 h-5 z-10 bg-red-600'></div></div>
        <p className='font-semibold text-center text-2xl pb-6'>Please read the instructions in guidlines menu, if you already read then click on the link below to proceed.</p>
        <li className='list-none font-semibold text-white bg-red-500 text-xl py-6 px-8 rounded-lg cursor-pointer transition-all hover:bg-red-600 hover:scale-110 '><Link to="/Quiz">Start Quiz</Link></li>
       </div>
  )
}

export default Redirect