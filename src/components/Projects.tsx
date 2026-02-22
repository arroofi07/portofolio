import wisataWeb from '../assets/2.png';
import schoolWeb from '../assets/1.png';
import cloneThreads from '../assets/4.png';
import webLoker from '../assets/3.png';
import portofolio from '../assets/portofolio.png';

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const itemsProjects = [
    {
      title: 'West Sumatra Tourism',
      text: 'Developed a comprehensive web platform for exploring tourist attractions across West Sumatra.',
      img: wisataWeb,
      url: 'https://github.com/arroofi07/travel-website',
      using: ['React js', 'Tailwind', 'JavaScript', 'Node Js']
    },
    {
      title: 'School Learning Portal',
      text: 'A structured LMS designed to facilitate the educational process between teachers and students.',
      img: schoolWeb,
      url: 'https://github.com/arroofi07/Web-school-with-expressjs-and-react-js',
      using: ['React js', 'JavaScript', 'Tailwind', 'Express Js', 'MySQL']
    },
    {
      title: 'Threads Clone',
      text: 'A full-stack replica of the Threads application supporting authentication and real-time posting.',
      img: cloneThreads,
      url: 'https://github.com/arroofi07/thread-clone',
      using: ['React', 'TypeScript', 'Tailwind', 'Nest Js', 'MySQL']
    },
    {
      title: 'Job Vacancy Platform',
      text: 'An end-to-end recruitment platform bridging the gap between job seekers and employers.',
      img: webLoker,
      url: 'https://github.com/arroofi07/job-vacancy',
      using: ['React', 'TypeScript', 'Tailwind', 'Nest Js', 'MySQL']
    },
    {
      title: 'Personal Portfolio',
      text: 'The current iteration of my personal portfolio. Designed with glassmorphism and modern aesthetics.',
      img: portofolio,
      url: 'https://github.com/arroofi07/portofolio',
      using: ['React', 'TypeScript', 'Tailwind', 'Framer']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.4 } }
  };

  return (
    <div id="projects" className="w-full relative py-16 lg:py-24 px-4 lg:px-6 transition-colors duration-300 bg-background/50 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          <div className="text-left w-full md:w-2/3">
            <div className="inline-flex items-center space-x-2 mb-2 lg:mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight uppercase">FEATURED <span className="text-primary">WORK.</span></h2>
              <div className="h-1.5 w-8 lg:h-2 lg:w-12 bg-primary rounded-full ml-2 lg:ml-4"></div>
            </div>
            <p className="text-muted-foreground text-sm lg:text-lg max-w-xl">
              A showcase of my recent work, highlighting full-stack capabilities.
            </p>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex md:justify-end">
            <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">
              View GitHub <FaExternalLinkAlt className="ml-2 text-xs" />
            </Button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {itemsProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="h-full z-20 group"
            >
              <Card className="h-full flex flex-col overflow-hidden bg-card/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 rounded-2xl lg:rounded-3xl relative">

                {/* Subtle hover border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500 rounded-2xl lg:rounded-3xl pointer-events-none"></div>

                {/* Project Image */}
                <div className="relative h-48 sm:h-60 overflow-hidden bg-muted rounded-t-2xl lg:rounded-t-3xl border-b border-border/50">
                  <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Floating Tech Badges */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {project.using.slice(0, 2).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm border-0 shadow-sm text-[10px] px-2 py-0.5 pointer-events-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="pt-6 px-6 flex-grow flex flex-col relative z-20 bg-gradient-to-t from-background/50 to-transparent">
                  <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm flex-grow leading-relaxed line-clamp-3 mb-6">
                    {project.text}
                  </p>
                </CardContent>

                <CardFooter className="pt-2 pb-6 px-6 flex items-center justify-between border-t border-transparent relative z-20">

                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <a href={project.url} target="_blank" rel="noreferrer" aria-label="Source Code">
                        <FaGithub className="text-lg" />
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <a href={project.url} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
