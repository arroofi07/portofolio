import React, { useState, useEffect, createContext } from "react";

export interface ThemeContextType {
  colorMode: boolean;
  setColorMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<boolean>(() => {
    // Check local storage or system preference on mount
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (colorMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }} >
      {children}
    </ThemeContext.Provider>
  )
}