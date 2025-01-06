import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
   <>
  <nav className='sticky top-0 left-0  flex justify-between items-center py-6 px-8 bg-[#2e4fc4]  md:px-32 drop-shadow-md z-20'>
   <div className='flex items-center text-xl text-white font-semibold hover:text-red-500 cursor-pointer'> <Logo/> <span>QuizHub</span></div>
      
       <ul className='hidden lg:flex items-center gap-12 font-semibold text-base lg:text-lg'>
        <li className='p-3 hover:bg-red-500 cursor-pointer hover: text-white transition rounded-lg'   ><Link to="/">Home</Link></li>
        <li className='p-3 hover:bg-red-500 cursor-pointer hover: text-white transition rounded-lg'  ><Link to='/Guidlines'>Guidlines</Link>
        </li>
        <li className='p-3 hover:bg-red-500 cursor-pointer hover: text-white transition rounded-lg'  ><Link to='/Contact'>Contact</Link>
        </li>
       </ul>
       
       <i className="fa-solid fa-bars lg:hidden block text-5xl cursor-pointer text-white" onClick={()=>{setIsOpen(!isOpen)}}></i>
       
       <div className={`absolute lg:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isOpen == true ? "opacity-100" : "opacity-0"}`}
       
       style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
            
            <li className='list-none w-full text-center p-4 hover:bg-red-500 hover:text-white transition-all cursor-pointer'><Link to="/">Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-red-500 hover:text-white transition-all cursor-pointer'><Link to="/Guidlines">Guidlines</Link></li>
            <li className='list-none w-full text-center p-4 hover:bg-red-500 hover:text-white transition-all cursor-pointer'><Link to="/Contact">Contact</Link></li>


       </div>
  </nav>
   </>
  )
}

export default Navbar