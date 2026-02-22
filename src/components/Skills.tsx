import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

import js from '../assets/javascript.png';
import ts from '../assets/typescript (1).png';
import html from '../assets/html.png';
import ex from '../assets/expressjs.png';
import nestjs from '../assets/nestjs.png';
import boostrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import mysql from '../assets/logo-mysql-26353.png';
import nodejs from '../assets/nodejs.png';

export const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and interactive user interfaces.',
      skills: [
        { name: 'React', img: react, color: 'hover:border-cyan-400', shadow: 'hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]' },
        { name: 'TypeScript', img: ts, color: 'hover:border-blue-600', shadow: 'hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]' },
        { name: 'JavaScript', img: js, color: 'hover:border-yellow-400', shadow: 'hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)]' },
        { name: 'Tailwind CSS', img: tailwind, color: 'hover:border-cyan-500', shadow: 'hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]' },
        { name: 'Bootstrap', img: boostrap, color: 'hover:border-purple-500', shadow: 'hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]' },
        { name: 'HTML5', img: html, color: 'hover:border-orange-500', shadow: 'hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]' },
        { name: 'CSS3', img: css, color: 'hover:border-blue-500', shadow: 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]' },
      ]
    },
    {
      title: 'Backend & Database',
      description: 'Developing robust server-side logic and managing data architectures.',
      skills: [
        { name: 'Node.js', img: nodejs, color: 'hover:border-green-600', shadow: 'hover:shadow-[0_8px_30px_rgba(22,163,74,0.15)]' },
        { name: 'NestJS', img: nestjs, color: 'hover:border-red-600', shadow: 'hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)]' },
        { name: 'Express.js', img: ex, color: 'hover:border-gray-400', shadow: 'hover:shadow-[0_8px_30px_rgba(156,163,175,0.15)]' },
        { name: 'MySQL', img: mysql, color: 'hover:border-blue-800', shadow: 'hover:shadow-[0_8px_30px_rgba(30,64,175,0.15)]' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.4 } }
  };

  return (
    <div id="skills" className="w-full py-12 lg:py-24 px-4 lg:px-6 relative z-10 bg-background/30">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <div className="h-px w-12 bg-primary/50"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-wider uppercase">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <div className="h-px w-12 bg-primary/50"></div>
          </div>
          <p className="mt-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I specialize in to build high-performance web applications.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              <div className="border-b border-border/50 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full block"></span>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm pl-5">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex-grow sm:flex-grow-0">
                    <Card className={`group flex items-center p-2.5 sm:p-4 bg-card/60 backdrop-blur-md border border-white/10 dark:border-white/5 transition-all duration-300 ${skill.color} ${skill.shadow} sm:hover:-translate-y-1 overflow-hidden relative cursor-default rounded-full sm:rounded-xl`}>
                      {/* Subtle background glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/0 sm:group-hover:to-primary/5 transition-colors duration-500 z-0"></div>

                      <div className="w-8 h-8 sm:w-14 sm:h-14 flex-shrink-0 bg-background/80 rounded-full sm:rounded-xl p-1.5 sm:p-2.5 flex items-center justify-center group-hover:bg-background transition-colors z-10 shadow-sm border border-border/50">
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-full h-full object-contain filter drop-shadow-sm sm:group-hover:scale-110 sm:group-hover:rotate-3 transition-transform duration-300"
                        />
                      </div>

                      <div className="ml-2 sm:ml-4 z-10 pr-2 sm:pr-0 flex-grow">
                        <span className="font-bold text-foreground text-sm sm:text-base tracking-wide sm:group-hover:text-primary transition-colors block whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};