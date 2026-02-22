import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    let timer: any;
    if (status === 'success' || status === 'error') {
      timer = setTimeout(() => setStatus('idle'), 4000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Basic validation
    const formData = new FormData(formRef.current);
    if (!formData.get('user_name') || !formData.get('user_email') || !formData.get('message')) {
      alert('Please fill out all fields.');
      return;
    }

    setStatus('loading');

    emailjs.sendForm('service_j57pimg', 'template_ksn9kuk', formRef.current, 'xVkDT_R6kQHCITdDm')
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <div id="contact" className="w-full relative py-12 lg:py-24 px-4 lg:px-6 mt-10 lg:mt-20 transition-colors duration-300 z-10">
      {/* Dynamic background for Contact section */}
      <div className="absolute inset-0 bg-background pointer-events-none -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start text-center lg:text-left">

        {/* Left column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left pt-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-tight font-extrabold text-foreground mb-4 lg:mb-6 uppercase">
            Let's build something <span className="text-primary">amazing</span> together.
          </h2>
          <p className="text-sm lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Whether you have an idea for a project, need a developer for your team, or just want to chat—feel free to send me a message!
          </p>

          <div className="hidden lg:block mt-20">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Connect</p>
            <div className="flex space-x-6">
              <a href="mailto:arrooficr7@gmail.com" className="text-xl hover:text-primary text-foreground transition-colors font-medium border-b-2 border-transparent hover:border-primary pb-1">arrooficr7@gmail.com</a>
            </div>
          </div>
        </motion.div>

        {/* Right column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Decorative blur blob */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-blue-500/20 rounded-[3rem] blur-2xl opacity-40 dark:opacity-50 mix-blend-multiply" />

          <div className="glass-card relative rounded-3xl p-8 lg:p-12 border border-white/20 dark:border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center space-x-3">
              <span>Send a Message</span>
              <span className="h-px w-12 bg-primary/50 block"></span>
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-semibold tracking-wide text-foreground ml-1">Name</label>
                <Input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Your Name"
                  className="bg-background/80 focus-visible:ring-primary py-5 lg:py-6 rounded-xl border-muted-foreground/30 hover:border-primary/50 transition-colors shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-semibold tracking-wide text-foreground ml-1">Email Address</label>
                <Input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="you@example.com"
                  className="bg-background/80 focus-visible:ring-primary py-5 lg:py-6 rounded-xl border-muted-foreground/30 hover:border-primary/50 transition-colors shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold tracking-wide text-foreground ml-1">Your Message</label>
                <Textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Hello, I'd like to talk about..."
                  rows={4}
                  className="bg-background/80 focus-visible:ring-primary min-h-[140px] resize-none rounded-xl border-muted-foreground/30 hover:border-primary/50 transition-colors shadow-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                size="lg"
                className="mt-4 w-full flex items-center justify-center gap-2 py-5 lg:py-6 text-lg bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 disabled:opacity-70 transition-all shadow-[0_4px_14px_hsl(var(--primary)/0.3)] hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Modern Toast Notifications */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-6 py-4 rounded-full backdrop-blur-md shadow-lg"
          >
            <FaCheckCircle className="text-xl" />
            <span className="font-medium">Message sent successfully!</span>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-rose-500/10 border border-rose-500/30 text-rose-500 px-6 py-4 rounded-full backdrop-blur-md shadow-lg"
          >
            <FaExclamationCircle className="text-xl" />
            <span className="font-medium">Failed to send message. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full mt-20 lg:mt-32 border-t border-border/50 pt-12 lg:pt-16 pb-8 bg-background relative z-10">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">

            {/* Brand / Bio */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Arroofi.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                Crafting digital experiences with modern web technologies. Focuses on clean, scalable, and pixel-perfect design.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-foreground font-semibold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="text-center md:text-left">
              <h4 className="text-foreground font-semibold mb-6 tracking-wide uppercase text-sm">Connect with me</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/arroofi07" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm">
                  <FaGithub className="text-lg" />
                </a>
                <a href="https://linkedin.com/in/nabhan-arroofi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-theme-linkedin hover:bg-blue-600 hover:text-white transition-all hover:scale-110 shadow-sm">
                  <FaLinkedin className="text-lg" />
                </a>
                <a href="https://instagram.com/nabhan.arroofi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-pink-600 hover:text-white transition-all hover:scale-110 shadow-sm">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="mailto:arrooficr7@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm">
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p className="font-medium text-center md:text-left mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Nabhan Arroofi.
            </p>
            <p className="font-medium text-center md:text-right">
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
