import { useContext } from 'react';
import { ThemeContext } from './ThemeColorMode';
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import indonesianCv from '../assets/cv2.jpg';
import englishCv from '../assets/cv1.jpg';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import bgDark from '../assets/Desain tanpa judl(1).png';
import bgLight from '../assets/Desain tanpa judul.png';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const { colorMode } = useContext<any>(ThemeContext);

  const icons = [
    { icon: <AiFillGithub />, link: 'https://github.com/arroofi07' },
    { icon: <CiLinkedin />, link: 'https://id.linkedin.com/in/nabhan-arroofi-arpansi-30a536271' },
    { icon: <AiOutlineMail />, link: 'mailto:arrooficr7@gmail.com' }
  ];

  const validateBg = colorMode ? bgDark : bgLight;

  return (
    <div id="about" className="relative w-full pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Blobs for Hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob dark:opacity-20 hidden md:block" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000 dark:opacity-20 hidden md:block" />
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000 dark:opacity-20 hidden md:block" />

      {/* Hero Section */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 w-full lg:w-1/2"
        >
          <Badge variant="secondary" className="mb-4 lg:mb-6 px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-0">
            Welcome to my portfolio
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight mb-4 lg:mb-6 text-foreground w-full leading-[1.15] lg:leading-[1.1]">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              <Typewriter
                options={{
                  strings: ['Nabhan Arroofi', 'Full-Stack Dev', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500",
                  cursorClassName: "text-primary flex-inline"
                }}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I specialize in crafting beautiful, high-performance web applications with modern technologies. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-muted transition-all w-full sm:w-auto" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex space-x-4 lg:space-x-6 text-xl lg:text-2xl mt-4 items-center justify-center sm:justify-start">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mr-2">Connect:</span>
            {icons.map((item, key) => (
              <Button asChild key={key} variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-border bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative"
        >
          {/* Subtle floating animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-[75%] sm:w-[85%] lg:w-[95%] flex justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
            <img src={validateBg} alt="Hero Illustration" className="w-full h-auto object-contain drop-shadow-2xl z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4 lg:px-6 mt-16 md:mt-32 relative z-10"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch">

          {/* Left Side: Title & Image Placeholder / Pattern */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-10 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <span className="h-[2px] w-8 sm:w-12 bg-primary rounded-full hidden sm:block"></span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight uppercase">About <span className="text-primary">Me.</span></h2>
                <span className="h-[2px] w-8 sm:w-12 bg-primary rounded-full lg:hidden block"></span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                "Building digital products, brands, and experiences."
              </p>
            </div>

            <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:aspect-auto lg:h-[400px] rounded-[2rem] overflow-hidden glass-card border border-border/50 flex items-center justify-center bg-card shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent group-hover:scale-105 transition-transform duration-700 ease-out"></div>
              
              {/* Decorative Blur Orbs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full mix-blend-screen filter blur-[50px] animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full mix-blend-screen filter blur-[50px] animate-pulse animation-delay-1000"></div>
              
              <div className="relative z-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-500">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_20s_linear_infinite]">
                  <polygon points="12 2 2 22 22 22"></polygon>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content & Actions */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center mt-4 lg:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              
              {/* Card 1: Who I Am */}
              <div className="relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col sm:flex-row gap-4 items-start">
                  <div className="p-3 rounded-xl sm:rounded-2xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Who I Am</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Hello! I am a <strong className="text-foreground font-semibold">passionate full-stack web developer</strong> dedicated to creating scalable, responsive, and highly interactive web applications. My journey into tech started with a deep curiosity for how things work on the internet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Stack */}
              <div className="relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-md group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col sm:flex-row gap-4 items-start">
                  <div className="p-3 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Tech Stack & Journey</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Currently pursuing a degree in computer science, I build dynamic platforms. My core stack includes <strong className="text-blue-500 font-semibold">React, TypeScript, Tailwind CSS</strong>, along with robust backends built on <strong className="text-foreground font-medium">Node.js</strong> and <strong className="text-foreground font-medium">NestJS</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Approach */}
              <div className="relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-md group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col sm:flex-row gap-4 items-start">
                  <div className="p-3 rounded-xl sm:rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">My Approach</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      I am a strong advocate for writing clean, maintainable code and building architectures that scale. Whether working independently or driving collaboration within a team, I aim to deliver pixel-perfect digital experiences.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="rounded-xl px-8 py-6 text-base font-bold shadow-[0_4px_14px_hsl(var(--primary)/0.2)] hover:shadow-[0_6px_20px_hsl(var(--primary)/0.3)] transition-all hover:-translate-y-1 w-full sm:w-auto">
                    Download Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90vw] max-w-md bg-background/95 backdrop-blur-xl border-border/50 rounded-2xl shadow-2xl p-6">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-primary">Choose Language</DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground mt-2 text-sm sm:text-base">
                      Select which version of my CV you'd like to download.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col space-y-3 sm:space-y-4 mt-6">
                    <Button asChild variant="outline" className="w-full py-5 sm:py-6 text-sm sm:text-base border-2 border-primary/20 hover:border-primary text-foreground hover:bg-primary/5 transition-all rounded-xl shadow-sm">
                      <a href={indonesianCv} download="Cv_Nabhan_arroofi.jpg">
                        <span className="font-semibold">Indonesian Version</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full py-5 sm:py-6 text-sm sm:text-base border-2 border-primary/20 hover:border-primary text-foreground hover:bg-primary/5 transition-all rounded-xl shadow-sm">
                      <a href={englishCv} download="Cv_Nabhan_arroofi.jpg">
                        <span className="font-semibold">English Version</span>
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};