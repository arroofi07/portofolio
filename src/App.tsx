import { useEffect, useState } from "react"
import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { ThemeProvider } from "./components/ThemeColorMode"
import TypewriterComponent from "typewriter-effect"
// import {activeForm} from 


function App() {

  const [sayHello, setSayHello] = useState<boolean>(true)

  useEffect(() => {
    let timer: any;

    if (sayHello) {
      timer = setTimeout(() => {
        setSayHello(false)
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [sayHello])


  return (
    <>
      {sayHello ? (
        // welcome
        < div className="text-white bg-black w-[100%] h-[100%] absolute flex flex-col justify-center items-center text-center space-y-10 text-[20px] font-serif font-extrabold " >
          <h1 className="loader" ></h1 >
          <h1>
            <TypewriterComponent
              options={{
                strings: ['Loading'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div >
      ) : (
        <ThemeProvider>
          <Navbar />
          <About />
          <Skills />
          <Projects />
        </ThemeProvider>
      )}



    </>
  )
}

export default App
