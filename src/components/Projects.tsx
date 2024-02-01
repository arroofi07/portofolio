import wisataWeb from '../assets/2.png'
import schoolWeb from '../assets/1.png'
import cloneThreads from '../assets/4.png'
import webLoker from '../assets/3.png'
import portofolio from '../assets/portofolio.png'
import { useContext } from 'react'
import { ThemeContext } from './ThemeColorMode'
import { Contact } from './Contact'
import { FaGithub } from "react-icons/fa";




export const Projects = () => {

  const { colorMode } = useContext<any>(ThemeContext)


  const itemsProjects = [
    {
      text: 'Website for searching a list of tourist attractions in West Sumatra',
      img: wisataWeb,
      url: 'https://github.com/arroofi07/travel-website',
      using: [
        {
          name: 'React js',
          link: 'https://vitejs.dev/guide/'
        },
        {
          name: 'Tailwind',
          link: 'https://tailwindcss.com/'
        },
        {
          name: 'Java Script',
          link: 'https://www.javascript.com/'
        },
        {
          name: 'Node Js',
          link: 'https://nodejs.org/en'
        },
      ]
    },
    {
      text: 'Website to help teachers and students in the learning process',
      img: schoolWeb,
      url: 'https://github.com/arroofi07/Web-school-with-expressjs-and-react-js',
      using: [
        {
          name: 'React js',
          link: 'https://vitejs.dev/guide/'
        },
        {
          name: 'Java Script',
          link: 'https://www.javascript.com/'
        },
        {
          name: 'Tailwind',
          link: 'https://tailwindcss.com/'
        },
        {
          name: 'Express Js',
          link: 'https://expressjs.com/'
        },
        {
          name: 'My Sql',
          link: 'https://www.mysql.com/'
        },
      ]
    },
    {
      text: 'replica of the threads application created in the form of a website',
      img: cloneThreads,
      url: 'https://github.com/arroofi07/thread-clone',
      using: [
        {
          name: 'React js',
          link: 'https://vitejs.dev/guide/'
        },
        {
          name: 'Type Script',
          link: 'https://www.typescriptlang.org/'
        },
        {
          name: 'Tailwind',
          link: 'https://tailwindcss.com/'
        },
        {
          name: 'Node Js',
          link: 'https://nodejs.org/en'
        },
        {
          name: 'Nest Js',
          link: 'https://nestjs.com/'
        },
        {
          name: 'My Sql',
          link: 'https://www.mysql.com/'
        },
      ]
    },
    {
      text: 'A website for job seekers and employers posting job vacancies',
      img: webLoker,
      url: 'https://github.com/arroofi07/job-vacancy',
      using: [
        {
          name: 'React js',
          link: 'https://vitejs.dev/guide/'
        },
        {
          name: 'Type Script',
          link: 'https://www.typescriptlang.org/'
        },
        {
          name: 'Tailwind',
          link: 'https://tailwindcss.com/'
        },
        {
          name: 'Node Js',
          link: 'https://nodejs.org/en'
        },
        {
          name: 'Nest Js',
          link: 'https://nestjs.com/'
        },
        {
          name: 'My Sql',
          link: 'https://www.mysql.com/'
        },

      ]
    },

    {
      text: 'A portfolio I created to explain myself and the projects I am developing',
      img: portofolio,
      url: 'https://github.com/arroofi07/portofolio',
      using: [
        {
          name: 'React js',
          link: 'https://vitejs.dev/guide/'
        },
        {
          name: 'Type Script',
          link: 'https://www.typescriptlang.org/'
        },
        {
          name: 'Tailwind',
          link: 'https://tailwindcss.com/'
        },
        {
          name: 'Node Js',
          link: 'https://nodejs.org/en'
        }
      ]
    },
    {
      text: 'dont-use',
      img: portofolio,
      url: '',
      using: [
        {
          name: 'React js',
          link: 'https://vitejs.dev/guide/'
        },
        {
          name: 'Type Script',
          link: 'https://www.typescriptlang.org/'
        },
        {
          name: 'Tailwind',
          link: 'https://tailwindcss.com/'
        },
        {
          name: 'Node Js',
          link: 'https://nodejs.org/en'
        }
      ]
    }
  ]

  return (
    <div id='projects' className={`w-full h-full relative top-[30px] pt-[70px] pb-[10px]  flex flex-col justify-center items-center  ${colorMode ? 'bg-white lg:pb-[100px] ' : 'bg-black'} `}>
      <h1 className={`font-bold text-[25px] text-center ${colorMode ? 'text-cyan-500' : 'text-cyan-400'}`} >My Projects</h1>

      <div className='space-y-6 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-center lg:items-center lg:w-full  lg:space-y-7 lg:pl-4 ' >
        {itemsProjects.map((value, key) => (
          <ul
            id={value.text == 'dont-use' ? 'dont-use' : 'null'}
            key={key}
            style={{ boxShadow: `0 0 13px ${colorMode ? 'black' : 'cyan'}` }}
            className={`mt-6 w-[85%] text-center flex flex-col justify-center items-center ${colorMode ? 'border-[2px]' : 'border-[1px] '} ${value.text === 'dont-use' ? 'lg:bg-transparent lg:text-transparent -z-50 ' : ''}  rounded-b-[20px] border-cyan-400 h-auto rounded-[20px] lg:w-[43%] lg:ml-5 lg:mr-7 ${colorMode ? 'bg-slate-200' : 'bg-black'} `}
          >
            <li
              id={`${colorMode ? 'boxProjectsLight' : 'boxProjects'}`}
              className=' h-[230px] cursor pointer w-full rounded-[20px] select-none  ' >
              <img src={value.img} alt='' className={`h-full w-full object-cover rounded-[20px] cursor-pointer select-none ${value.text == 'dont-use' ? 'hidden' : ''} `} />
            </li>
            <li
              style={{ textShadow: `0 0  ${colorMode ? '20px black' : '20px white'}` }}
              className={`font-sans text-[15px] w-[94%] capitalize text-center mt-4 ${colorMode ? 'text-black' : 'text-white'} `}>
              <p>{value.text}</p>
            </li>
            <li className=' w-[90%]'>
              <div className={`flex flex-wrap justify-start items-start w-[95%] ml-2 font-semibold mt-3 `}>
                {value.using?.map((value2, key) => (
                  <a key={key} className={`bg-black border-[1px] cursor-pointer hover:bg-white hover:border-black hover:text-black capitalize text-[13px] border-cyan-400 text-cyan-300 rounded-[10px] pl-2 pr-2 pb-1 text-center mb-2 mr-2 ${value.text == 'dont-use' ? 'hidden' : ''} `} href={value2.link}>{value2.name}</a>
                ))}
              </div>
            </li>
            <li className=' w-[90%] flex justify-end mb-5 mt-5 mr-1 space-x-36 lg:space-x-[330px] ' >
              <h1 className={` text-[30px] ${colorMode ? 'text-black' : 'text-cyan-500'} `} ><FaGithub /></h1>
              <button
                id='box-button'
                className={`bg-cyan-400 rounded-[10px] border-[1px] border-black hover:text-cyan-400 hover:bg-black  cursor-pointer text-center w-[40%] pb-1 font-sans font-bold text-black lg:w-[25%]  `} >
                <a href={value.url} >Source Code</a>
              </button>
            </li>
          </ul>
        ))}
      </div>

      <Contact />




    </div>
  )
}