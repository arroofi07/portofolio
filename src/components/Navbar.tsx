import { useContext, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from 'react-scroll';
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs"
import { WiDaySunnyOvercast } from "react-icons/wi";
import { ThemeContext } from "./ThemeColorMode";



export const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)
  const { colorMode, setColorMode } = useContext<any>(ThemeContext)

  const toogleColorMode = () => {
    setColorMode(!colorMode)
  }


  const listNavbarNav = [
    {
      title: 'About',
      link: 'about'
    },
    {
      title: 'Skills',
      link: 'skills'
    },
    {
      title: 'projects',
      link: 'projects'
    },
    {
      title: 'Contact',
      link: 'contact'
    }
  ]

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    setActiveNav(false)
  }

  const validateboxShadowNav = colorMode ? 'box-navbarLight' : 'box-navbarDark'


  return (
    <div className="flex flex-col justify-center items-center">

      <nav
        style={{
          boxShadow: `0 0 45px ${colorMode ? "black" : "cyan"}`,
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          backdropFilter: 'blur(5px)'
        }}
        className={`flex justify-start border-b-2 bg-blend-saturation border-cyan-500 z-50 bg-opacity-60 bg-transparent font-serif font-semibold pl-3 pt-3 text-white text-[33px] h-[60px] w-[99%]  fixed top-0 lg:z-10 lg:pl-10  ${colorMode ? "border-b-[3px]" : ""} `}>
        <p onClick={toogleColorMode} className={`text-black  text-[25px] cursor-pointer h-7 w-[60px] flex justify-start items-center rounded-[19px] mt-1 border-2 border-cyan-400  `} >
          <button type="button" className={`text-[22px] border-1 cursor-pointer border-cyan-400 rounded-[20px] w-[30px] h-[25px] bg-cyan-700 flex justify-center items-center duration-700 ${colorMode ? "ml-[27px] w-[32px] text-yellow-400 " : "text-yellow-500"} `} >
            {colorMode ? (
              <BsMoonStars />
            ) : (
              <WiDaySunnyOvercast />
            )}
          </button>
        </p>
        <p onClick={() => setActiveNav(!activeNav)} className={` fixed right-4  active:animate-ping hover:text-rose-500 lg:hidden ${activeNav ? `${colorMode ? 'text-black' : 'text-white'}` : 'text-cyan-500'} `} >
          {activeNav ? (
            <IoMdClose />
          ) : (
            <FaHamburger />
          )}
        </p>
      </nav >


      {/* navbarNav */}
      <div className={`  w-full flex justify-center items-center z-10 text-[18px] `} >
        <ul
          id={validateboxShadowNav}
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: '10px',
            backdropFilter: "blur(1px)"
          }}
          className={`text-white bg-sky-500 fixed font-serif font-semibold capitalize border-[1px] bg-opacity-40 duration-700 pt-40 space-y-5  w-[95%]  ${activeNav ? "mt-52" : "mt-[-500px]"} lg:space-x-5 lg:bg-transparent lg:border-none lg:text-[10px] lg:flex lg:w-[30%] lg:mr-[70px] lg:top-[340px] lg:right-0 `} >
          {listNavbarNav.map((item, index) => (
            <li key={index}
              style={{ borderTopLeftRadius: '0px', borderBottomRightRadius: '0px', boxShadow: '0 0 5px black' }}
              className={` border-cyan-400 active:animate-ping border-[2px] text-center w-[90%] ml-[17px] mt-5 rounded-[15px] hover:bg-cyan-400 hover:text-black cursor-pointers hover:border-black lg:bg-transparent lg:z-40 lg:w-[80px]  ${colorMode ? 'lg:text-black  lg:border-cyan-400 bg-black lg:hover:bg-black lg:hover:text-white lg:hover:border-cyan-400' : 'lg:bg-slate-950 bg-black'} `} >
              <Link to={item.link} smooth={true} duration={500} className="pl-28 pr-28 lg:pl-5 lg:pr-5 cursor-pointer select-none ">{item.title}</Link>
            </li>
          ))}
          <p className="h-2" ></p>
        </ul>
      </div>

      {/* Button to up */}
      <button id="btn-up" type="button" onClick={handleScrollToTop}
        className="text-[30px] active:animate-ping hover:bg-black hover:text-white text-black bottom-16 border-[1px] border-black right-6 z-50 bg-cyan-500 rounded-[8px] p-2 fixed ">
        <FaArrowUp />
      </button>


    </div>
  )
}

