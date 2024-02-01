import Typewriter from 'typewriter-effect';
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import bgDark from '../assets/Desain tanpa judl(1).png'
import bgLight from '../assets/Desain tanpa judul.png'
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeColorMode';
import { FaWindowClose } from 'react-icons/fa';
import indonesianCv from '../assets/cv2.jpg'
import englishCv from '../assets/cv1.jpg'


export const About = () => {

  const { colorMode } = useContext<any>(ThemeContext)
  const [activeCv, setActiveCv] = useState<boolean>(false)


  const icons = [
    {
      linkEdin: <a href='https://id.linkedin.com/in/nabhan-arroofi-arpansi-30a536271'><CiLinkedin /></a>
    },
    {
      github: <a href='https://github.com/arroofi07' ><AiFillGithub /></a>
    },
    {
      email: <a href='mailto:arrooficr7@gmail.com' ><AiOutlineMail /></a>
    }
  ]


  const DownloadIndonesianCv = () => {
    // Membuat sebuah anchor element
    const downloadLink = document.createElement('a');

    // Menentukan atribut href dan download pada anchor element
    downloadLink.href = indonesianCv;
    downloadLink.download = 'Cv_Nabhan_arroofi.jpg'; // Nama file saat diunduh

    // Memanggil click event pada anchor element
    downloadLink.click();
    setActiveCv(false)
  };


  const DownloadEnglishCv = () => {
    const downloadLink = document.createElement('a');

    downloadLink.href = englishCv;
    downloadLink.download = 'Cv_Nabhan_arroofi.jpg';

    downloadLink.click();
    setActiveCv(false)
  };

  let validateBg = colorMode ? bgLight : bgDark

  return (
    <div className={`font-serif w-full mt-[-110px] pt-[100px] pb-[100px] text-[27px] relative top-24 font-bold ${colorMode ? "bg-white" : ""} lg:mt-[-200px] lg:pt-[300px] `} >
      <h1
        id='about'
        className={`capitalize text-sky-400 ml-4 text-[34px] font-sans font-bold w-[70%] h-[30px] lg:text-[50px] lg:w-[50%] ${colorMode ? "text-cyan-500" : ""}  `} >
        <Typewriter
          options={{
            strings: ['nabhan arroofi arpansi'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className={` capitalize text-[14px] w-[93%] flex flex-wrap flex-col items-start pl-5 mt-[78px] font-sans lg:text-[20px] ${colorMode ? "text-black" : "text-white"}  `} >
        Hi there! I'm dedicated to web development,
        <span className=' lg:absolute lg:top-[440px] lg:left-5 '> and I specialize in <b></b>
          <span
            className='text-cyan-500' >
            full-stack development
          </span>
        </span>
      </p>
      <p className={`flex justify-start pl-4  items-center space-x-3 mt-10  text-[30px] cursor-pointer  lg:mt-16 ${colorMode ? "text-black" : "text-white"} `} >
        {icons.map((item, key) => (
          <ul key={key} >
            <li className='hover:text-cyan-500 ' >{item.github}</li>
            <li className='hover:text-cyan-500' >{item.linkEdin}</li>
            <li className='hover:text-cyan-500' >{item.email}</li>
          </ul>
        ))}
      </p>


      {/* image */}
      <div className='w-full flex flex-col justify-center select-none items-center pt-10 mb-[-50px] lg:w-[35%] lg:absolute right-24 top-52 ' >
        <img id='boneka' src={validateBg} alt="" className='w-[80%] lg:w-[90%] select-none ' />
      </div>


      {/* about me  */}
      <div className='w-full text-[15px] flex flex-col  justify-start items-center h-auto relative top-16 lg:top-64 lg:pb-[250px] ' >
        <h1 className={`font-extrabold text-[25px] text-center ${colorMode ? 'text-cyan-500' : 'text-cyan-400'}`} >About Me</h1>
        <p className={`font-sans  mt-2  text-[15px] w-[90%]  ${colorMode ? "text-black font-extralight " : "text-white font-extralight "} lg:text-center `} >
          I am a <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`} >full-stack web daveloper</span> experienced in creating and developing responsive and engaging web applications.
          Currently, I am pursuing a degree in computer science.
          I have completed several front-end and back-end projects, mastering <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`} >TypeScript</span>  programming language and various <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`}>frameworks</span> for both <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`}>front-end</span> and <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`}>back-end</span> development.<br></br><br></br>
          I am dedicated to enhancing my programming skills, ensuring that my code is clean, and making my projects easily adaptable and upgradable.
          I believe that effective collaboration and communication are the keys to project success,
          and I am ready to work diligently to help achieve your goals in web <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`}>davelopment</span> and <span className={`${colorMode ? 'text-cyan-500' : 'text-cyan-300'}`}>innovation</span> in web technology.
        </p>
        <button type='button'
          style={{ boxShadow: `0 0 ${colorMode ? '10px cyan' : '30px cyan'} ` }}
          onClick={() => setActiveCv(!activeCv)}
          className='text-[18px] bg-black text-cyan-500 mt-9 rounded-[10px] border-[2px] border-cyan-400  text-center font-semibold font-sans p-[6px] hover:bg-cyan-500 hover:text-black '>
          Download CV
        </button>
      </div>

      {/* box pilihan bahasa cv */}
      {activeCv && (
        <div style={{ 'boxShadow': `0  0 30px ${colorMode ? 'black' : 'cyan'}`, backdropFilter: 'blur(5px)' }}
          className={`fixed top-48 bg-opacity-30 flex flex-col justify-center  text-cyan-400 font-serif border-[1px] w-[90%] ml-5 rounded-[15px] mb-[-500px] lg:w-[55%] lg:bg-opacity-100 z-50 lg:ml-[290px] lg:mt-[10px] ${colorMode ? 'border-cyan-500 border-[2px] bg-slate-300 ' : 'bg-black'} `}
        >
          <ul className='flex justify-end '>
            <li onClick={() => setActiveCv(false)} className='relative right-2 top-2 hover:text-rose-500 cursor-pointer' ><FaWindowClose /></li>
          </ul>
          <ul className='flex justify-center items-center text-[17px] space-x-3 pt-10 pl-10 pr-10 pb-16 text-center font-semibold font-sans ' >
            <li onClick={DownloadIndonesianCv} className='bg-black rounded-[10px] border-[2px] border-cyan-500 w-[300px] p-1 hover:bg-cyan-500 hover:text-black cursor-pointer ' >Indonesian</li>
            <li onClick={DownloadEnglishCv} className='bg-black rounded-[10px] border-[2px] border-cyan-500 w-[300px] p-1 hover:bg-cyan-500 hover:text-black cursor-pointer ' >English</li>
          </ul>
        </div>
      )}

    </div>
  )
}