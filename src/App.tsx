import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { ThemeProvider } from "./components/ThemeColorMode"
import { motion } from "framer-motion"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.main>
      </div>
    </ThemeProvider>
  )
}

export default App
