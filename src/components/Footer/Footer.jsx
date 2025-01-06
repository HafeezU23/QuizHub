import React from 'react'

const Footer = () => {
  return (
    <footer className='h-screen w-full bg-[#000e3b]'>
       <div className='h-[90%] lg:grid lg:grid-cols-2 lg:h-[80%]'>
        <div className='h-full w-full flex flex-col items-start justify-center text-white pl-16'>
              <h1 className='text-red-400 font-semibold text-2xl lg:text-4xl pb-4 lg:mt-3 lg:pb-9'>About Us</h1>
              <p className='text-xl lg:text-2xl p-8  lg:pb-32'>Welcome to QuizHub, myself Hafeez Ullah. I'm Computer Science Student. It is my first functional react web app as beginner. I hope you will enjoy and learn from this Quiz web application. If you have any feedback or suggestion, please let me know. Enjoy playing ❤️</p>
              <p className='text-slate-500 text-xl lg:text-2xl pt-4 lg:pt-16'>Connect me on</p>
              <span className='text-2xl lg:text-3xl pt-4'><a href="https://www.linkedin.com/in/hafeez-ullah-khan-211855293/" target='_blank'><i className="fa-brands fa-linkedin pr-7 cursor-pointer hover:text-red-500 transition"></i></a><a href="https://www.threads.net/@hafeezullah2004/" target='_blank'><i className="fa-brands fa-threads cursor-pointer hover:text-red-500 transition"></i></a></span>
        </div>
        <div className='hidden lg:flex flex-col justify-center items-center  w-full h-auto'>
            <div className='max-w-72 h-72 flex justify-center rounded-full bg-white animate-[bounce_4s_infinite]'> <img src="/Logo.png" alt="logo" /></div>
            <div className=' h-4 w-36' style={{
      background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgb(52, 52, 52) 80%)',
      borderRadius: '50%',
    }}></div>
        </div>
       </div>
       <div>
        <p className='text-white text-base lg:text-xl lg:pt-16 lg:pb-11 text-center'>© 2025 by QuizHub. Powered and secured by Hafeez Ullah</p>
       </div>
    </footer>
  )
}

export default Footer