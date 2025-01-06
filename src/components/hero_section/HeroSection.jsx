import React, { useEffect, useRef, useState } from 'react'
import TypeWriter from './TypeWriter'
import { HashLink } from 'react-router-hash-link';
import MainSection from '../main_section/MainSection';
import { Link } from 'react-router-dom';




const HeroSection = () => {
     
     
    
  return (
   <>
   
   <div className=' bg-center bg-cover bg-no-repeat relative'>
   <video src="/hero_video.mp4" className='w-full h-screen object-cover' autoPlay
          loop
          muted
          playsInline></video>
   <div className="absolute inset-0 bg-[#2e4fc4] bg-opacity-80">
       <div className='flex flex-col justify-center items-center w-full h-full text-white'>
              <h2 className='text-xl lg:text-7xl font-semibold text-center pb-7'>Welcome to</h2>
              <span className='h-20 lg:h-28'><h1 className='text-5xl lg:text-8xl font-extrabold text-center text-red-400'><TypeWriter title={" QuizHub"}/></h1></span>
              <p className='text-base lg:text-2xl text-red-100 font-semibold text-center'>Here you can test your knowledge and learn new things</p>
              
              <button className='mt-10 p-4 lg:py-6 lg:px-10 lg:text-xl font-semibold rounded-lg bg-red-500 hover:bg-red-700 transition hover:scale-110'><Link to="/Redirect">Start Quiz</Link></button>
       </div>
   </div>
   </div>
 
  
   </>
  )
}

export default HeroSection