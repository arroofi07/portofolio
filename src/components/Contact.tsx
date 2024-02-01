import React, { useContext, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaWindowClose } from "react-icons/fa";
import { ThemeContext } from './ThemeColorMode';


export const Contact = () => {
  const [activeForm, setActiveForm] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement | null>(null);
  const { colorMode } = useContext<any>(ThemeContext)
  const [activNotifSuccess, setActiveNotifSuccess] = useState<boolean>(false)
  const [activNotifFailed, setActiveNotifFailed] = useState<boolean>(false)

  useEffect(() => {
    let timer: any;

    if (activNotifSuccess || activNotifFailed) {
      timer = setTimeout(() => {
        setActiveNotifSuccess(false)
        setActiveNotifFailed(false)
      }, 5000)
    }

    return () => clearTimeout(timer)
  }, [])



  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      alert('Isi data terlebih dahulu!!')
      return
    }
    emailjs.sendForm('service_j57pimg', 'template_ksn9kuk', formRef.current, 'xVkDT_R6kQHCITdDm')
      .then((result: any) => {
        console.log(result.text);
        console.log('message send success');
        setActiveForm(!activeForm)
        setActiveNotifSuccess(true)
        setActiveNotifFailed(false)
      })
      .catch((error: any) => {
        console.log(error.text);
        console.log('message send failed');
        setActiveNotifFailed(true)
        setActiveNotifSuccess(false)
      });

  };

  return (
    <div id='contact' className={` ${colorMode ? 'text-black ' : 'text-white'} font-semibold font-sans text-center  w-full  ${activeForm ? 'mt-[100px]  h-full' : 'top-[-200px] pt-[-40%] h-[80%] relative  lg:top-[20px] lg:pb-[150px] lg:pt-[300px]'} ${colorMode ? 'bg-white' : 'bg-black'} `}>
      {!activeForm && (
        <div className='flex flex-col justify-center items-center h-full text-center mt-[-100px] '>
          <p className='lg:text-[23px] lg:font-semibold w-[85%]'>
            Whether you have an idea for a project or just want to chat
            <br />
            <span className='lg:relative lg:top-1'>feel free to send me a message</span>
          </p>
          <button
            onClick={() => setActiveForm(true)}
            style={{ boxShadow: '0 0 20px cyan' }}
            className='font-bold text-cyan-400 bg-black hover:border-black mt-8 mb-[-70px] pb-1 font-sans text-[20px] border-[1px] border-cyan-400 w-[42%] text-center rounded-xl cursor-pointer hover:text-black hover:bg-cyan-300 lg:w-[10%] lg:mt-10'>
            Contact Me
          </button>
          <p className={`relative text-white w-full text-[13px] -bottom-40 lg:pb-10 lg:mt-[50px] text-center font-serif font-semibold capitalize `} >
            <a href="" className={`${colorMode ? 'text-black' : ''}`} >@2024 By Arroofi | jambanchilago</a>
          </p>
        </div>

      )}

      {activeForm && (
        <div
          style={{ 'boxShadow': `0  0 30px ${colorMode ? 'black' : 'cyan'}`, backdropFilter: 'blur(5px)' }}
          className={`fixed top-48 bg-opacity-75 font-serif border-[1px] w-[90%] ml-5 rounded-[15px] mb-[-500px] lg:w-[55%] lg:p-10 lg:bg-opacity-100 lg:ml-[290px] lg:mt-[-30px] ${colorMode ? 'border-cyan-500 border-[2px] lg:bg-white ' : 'bg-black'} `} >
          <h1
            onClick={() => setActiveForm(!activeForm)}
            className={` fixed right-2 top-1  hover:text-rose-500 w-[25px]  text-[25px] lg:ml-[590px] cursor-pointer ${colorMode ? 'text-cyan-600' : 'text-cyan-400'} `}><FaWindowClose /></h1>

          <form ref={formRef} onSubmit={sendEmail} className='inline-block justify-center items-center w-full h-full top-10 relative bottom-0 ' >
            {/* <label className='font-bold '>Name</label><br></br> */}
            <input type="text" name="user_name" autoComplete='off' placeholder='Name' className={`mb-8 w-[85%] outline-none pl-2 border-b-2 bg-slate-800 bg-transparent  placeholder:font-bold lg:placeholder:opacity-70  ${colorMode ? 'placeholder:text-black border-cyan-600' : 'placeholder:text-white border-cyan-400'}  `} /><br></br>

            {/* <label className='font-bold '>Email</label><br></br> */}
            <input type="email" name="user_email" autoComplete='off' placeholder='Email' className={`mb-8 placeholder:font-bold outline-none bg-transparent focus:bg-blacks w-[85%] pl-2 border-b-2 bg-slate-800 lg:placeholder:opacity-70 ${colorMode ? 'placeholder:text-black  border-cyan-600' : 'placeholder:text-white  border-cyan-400'} `} /><br></br>

            {/* <label className='font-bold '>Message</label><br></br> */}
            <textarea name="message" autoComplete='off' placeholder='Message' className={`outline-none placeholder:font-bold focus:h-14 h-7  pl-2 resize-none w-[85%] bg-slate-800 border-b-2 bg-transparent lg:placeholder:opacity-70  ${colorMode ? 'placeholder:text-black border-cyan-600' : 'placeholder:text-white border-cyan-400'}  `} /><br></br>

            <button id='contact-button' type="submit" value="Send" className={`bg-cyan-500  text-black font-semibold mt-10 pr-16 pl-16  rounded-[5px] border-[1px] border-black ${colorMode ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}  `}>Send</button>
          </form>
          <p className='h-[60px]  ' ></p>
        </div>
      )}


      {/* notif sukses setelah mengirim pesan */}
      {activNotifSuccess && (
        <div style={{ 'boxShadow': `0  0 30px ${colorMode ? 'black' : 'cyan'}`, backdropFilter: 'blur(15px)' }}
          className={`fixed top-48 bg-opacity-30 flex flex-col justify-center  text-cyan-500 font-serif border-[1px] w-[90%] ml-5 rounded-[15px] mb-[-500px] lg:w-[45%] lg:bg-opacity-100 z-50 lg:ml-[350px] lg:mt-[10px] ${colorMode ? 'border-cyan-500 border-[2px] bg-slate-300 ' : 'bg-black'} `}
        >
          <ul className='flex flex-col justify-center p-5 '>
            <h1 className='text-[25px] capitalize ' >success</h1>
            <p className={` ${colorMode ? 'text-black' : 'text-white'} text-[15px] pt-3 `} >
              "message was sent successfully"
            </p>
          </ul>
        </div>
      )}


      {/* notif failed setelah mengirim pesan */}
      {activNotifFailed && (
        <div style={{ 'boxShadow': `0  0 30px ${colorMode ? 'black' : 'cyan'}`, backdropFilter: 'blur(15px)' }}
          className={`fixed top-48 bg-opacity-30 flex flex-col justify-center  text-cyan-500 font-serif border-[1px] w-[90%] ml-5 rounded-[15px] mb-[-500px] lg:w-[45%] lg:bg-opacity-100 z-50 lg:ml-[350px] lg:mt-[10px] ${colorMode ? 'border-cyan-500 border-[2px] bg-slate-300 ' : 'bg-black'} `}
        >
          <ul className='flex flex-col justify-center p-5 '>
            <h1 className='text-[25px] capitalize ' >failed</h1>
            <p className={` ${colorMode ? 'text-black' : 'text-white'} text-[15px] pt-3  `} >
              "Your message failed to send"
            </p>
          </ul>
        </div>
      )}





    </div>
  );
};
