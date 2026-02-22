import { useState, useEffect, useContext } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { ThemeContext } from "./ThemeColorMode";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, setColorMode } = useContext<any>(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleColorMode = () => setColorMode(!colorMode);

  const navLinks = [
    { title: 'About', link: '#about' },
    { title: 'Skills', link: '#skills' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveNav(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNav(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}
      >
        <div
          className="text-2xl font-extrabold tracking-tighter cursor-pointer text-foreground flex items-center z-50"
          onClick={handleScrollToTop}
        >
          <span className="text-primary">Ar</span>roofi.
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium tracking-wide">
            {navLinks.map((item, index) => (
              <li key={index} className="relative group cursor-pointer text-muted-foreground hover:text-foreground transition-colors overflow-hidden py-1">
                <a href={item.link} onClick={(e) => handleScroll(e, item.link)}>{item.title}</a>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleColorMode}
            className="rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            {colorMode ? <BsSun className="text-xl text-yellow-500" /> : <BsMoonStars className="text-xl text-primary" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleColorMode}
            className="rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            {colorMode ? <BsSun className="text-xl text-yellow-500" /> : <BsMoonStars className="text-xl text-primary" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setActiveNav(!activeNav)} className="text-3xl transition-transform hover:rotate-90">
            {activeNav ? <IoMdClose /> : <IoMdMenu />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {activeNav && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/90"
          >
            <ul className="flex flex-col items-center space-y-8 text-3xl font-bold tracking-tight">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer hover:text-primary transition-colors text-foreground w-full text-center py-4"
                >
                  <a href={item.link} onClick={(e) => handleScroll(e, item.link)} className="block w-full">{item.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={handleScrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all duration-300 pointer-events-auto"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
