import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3zz1jzu', 'template_ilkv7dh', form.current, {
        publicKey: 'mmyvTpUihB-QKDnkZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='h-screen w-full bg-[#0332cb] p-11 flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-white'>Write Me ✒️</h1>
        <p className='mt-10 text-white text-3xl'>Would love to hear your thoughts!</p>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-10 bg-[#506dc1] p-4 rounded-lg'>
      <label className='text-white text-base lg:text-2xl'>Name</label>
      <input type="text" name="user_name" className='bg-transparent border-b-[1px] outline-none text-base text-white lg:text-xl w-40  lg:w-96 p-2'/>
      <label className='text-white text-base lg:text-2xl mt-3' >Email</label>
      <input type="email" name="user_email"  className='bg-transparent border-b-[1px] outline-none text-white  w-40 text-base lg:text-xl lg:w-96 p-2'/>
      <label className='text-white text-base lg:text-2xl mt-3'>Message</label>
      <textarea name="message" className='bg-transparent border-b-[1px] outline-none text-base lg:text-xl text-white  w-40 lg:w-96 p-2 resize-none'/>
      <input type="submit" value="Send" className='bg-red-500 p-4 cursor-pointer rounded-lg mt-7 text-white font-semibold transition-all hover:bg-red-700' />
    </form>
    </div>
    </>
  )
}

export default Contact