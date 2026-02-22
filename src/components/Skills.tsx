import js from '../assets/javascript.png'
import ts from '../assets/typescript (1).png'
import html from '../assets/html.png'
import ex from '../assets/expressjs.png'
import nestjs from '../assets/nestjs.png'
import boostrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import mysql from '../assets/logo-mysql-26353.png'
import nodejs from '../assets/nodejs.png'
import { useContext } from 'react'
import { ThemeContext } from './ThemeColorMode'

export const Skills = () => {
  const { colorMode } = useContext<any>(ThemeContext)

  const icons1 = [
    {
      html: html,
      text: 'HTML',
      linkHtml: 'https://www.w3schools.com/html/'
    },
    {
      ts: ts,
      text: 'Type Script',
      linkTs: 'https://www.typescriptlang.org/'
    },
    {
      js: js,
      text: 'Java Script',
      linkJs: 'https://www.javascript.com/'
    }
  ]

  const icons2 = [
    {
      css: css,
      text: 'CSS',
      linkCss: 'https://www.w3.org/Style/CSS/Overview.en.html'
    },
    {
      tailwind: tailwind,
      text: 'Tailwind',
      linkTailwind: 'https://tailwindcss.com/'
    },
    {
      boostrap: boostrap,
      text: 'Bosstrap',
      linkBoostrap: 'https://getbootstrap.com/'
    }
  ]

  const icons3 = [
    {
      nodejs: nodejs,
      text: '  Node js',
      linkNodejs: 'https://nodejs.org/en'
    },
    {
      react: react,
      text: 'React js',
      linkReact: 'https://react.dev/'
    },
    {
      mysql: mysql,
      text: 'Mysql',
      linkMysql: 'https://www.mysql.com/'
    }
  ]

  const icons4 = [
    {
      ex: ex,
      text: "Express js",
      linkEx: 'https://expressjs.com/'
    },
    {
      nestjs: nestjs,
      text: 'Nest js',
      linkNestjs: 'https://nestjs.com/'
    }
  ]


  return (
    <div id='skills' className={`relative top-[90px]  w-full pt-[30px] pb-[150px] ${colorMode ? "bg-white" : "bg-black"}  `} >
      <h1 className="font-bold text-sky-400 text-center text-[25px]" >My Skills</h1>


      {/* icons 1 */}
      <div className='flex space-x-16 justify-center  items-center mt-10  lg:justify-start lg:pl-80 lg:w-[47%] ' >
        {icons1.map((item, key) => (
          <ul key={key} >
            <li  >
              <a href={item.linkHtml} >
                <img src={item.html} className=' bg-orange-600 rounded-xl  cursor-pointer  hover:animate-bounce  active:animate-ping  ' width={55} />
              </a>
              <a href={item.linkTs}>
                <img src={item.ts} className='rounded-xl cursor-pointer bg-black  hover:animate-bounce  active:animate-ping  ' width={55} />
              </a>
              <a href={item.linkJs}>
                <img src={item.js} className='rounded-xl cursor-pointer  hover:animate-bounce  active:animate-ping  ' width={55} />
              </a>
            </li>
            <li className={`  text-center absolute -ml-[9px] mt-2 font-semibold font-sans ${item.text === 'HTML' ? "ml-[9px] lg:ml-[4px]" : ''} ${colorMode ? 'text-black' : 'text-white'} `} >
              {item.text}
            </li>
          </ul>
        ))}
      </div>

      {/* icons2 */}
      <div className='flex space-x-16 justify-center items-center mt-16 lg:justify-end lg:w-[47%] lg:ml-[600px] lg:pr-[240px] lg:mt-[-51px] ' >
        {icons2.map((item, key) => (
          <ul key={key} className=''>
            <li>
              <a href={item.linkCss}>
                <img src={item.css} className={`rounded-xl cursor-pointer  hover:animate-bounce active:animate-ping ${colorMode ? 'bg-slate-500' : 'bg-white'} `} width={55} />
              </a>
              <a href={item.linkTailwind}>
                <img src={item.tailwind} className='rounded-xl cursor-pointer   hover:animate-bounce  active:animate-ping ' width={55} />
              </a>
              <a href={item.linkBoostrap}>
                <img src={item.boostrap} className='rounded-xl cursor-pointer  hover:animate-bounce bg-slate-400 active:animate-ping  ' width={55} />
              </a>
            </li>
            <li className={`text-center absolute ml-[-1px] mt-2 font-semibold font-sans  ${item.text === 'CSS' ? 'ml-[13px]' : ''} ${colorMode ? 'text-black' : 'text-white'} `} >
              {item.text}
            </li>
          </ul>
        ))}
      </div>

      {/* icons 3 */}
      <div className='flex space-x-16 mt-16 justify-center items-center lg:w-[47%] lg:pl-[265px] lg:space-x-14 lg:ml-7 ' >
        {icons3.map((item, key) => (
          <ul key={key}>
            <li>
              <a href={item.linkReact}>
                <img src={item.react} className='rounded-xl cursor-pointer  hover:animate-bounce  active:animate-ping  ' width={55} />
              </a>
              <a href={item.linkMysql}>
                <img src={item.mysql} className='rounded-xl cursor-pointer  hover:animate-bounce bg-[#145f70c5] active:animate-ping  ' width={55} />
              </a>
              <a href={item.linkNodejs}>
                <img src={item.nodejs} className='rounded-xl cursor-pointer  bg-black hover:animate-bounce  active:animate-ping  ' width={55} />
              </a>
            </li>
            <li className={`text-center absolute ml-[-1px] mt-2 font-semibold font-sans  ${item.text === 'Mysql' ? 'ml-[6px]' : ''} ${colorMode ? 'text-black' : 'text-white'} `} >
              {item.text}
            </li>
          </ul>
        ))}
      </div>


      {/* icons 4 */}
      <div className='flex space-x-16 justify-center ml-[-120px] mt-[60px] items-center  lg:w-[47%] lg:ml-[590px] lg:mt-[-56px] lg:pr-[273px] ' >
        {icons4.map((item, key) => (
          <ul key={key}>
            <li>
              <a href={item.linkEx}>
                <img src={item.ex} className='rounded-xl cursor-pointer  hover:animate-bounce bg-black active:animate-ping  ' width={55} />
              </a>
              <a href={item.linkNestjs}>
                <img src={item.nestjs} className='rounded-xl cursor-pointer  hover:animate-bounce bg-black active:animate-ping  ' width={55} />
              </a>
            </li>
            <li className={`text-center absolute pl-[4px] mt-3 font-semibold font-sans  ${item.text === 'Express js' ? '-ml-[9px]' : ""} ${colorMode ? 'text-black' : 'text-white'} `} >
              {item.text}
            </li>
          </ul>
        ))}
      </div>


    </div>
  )
}