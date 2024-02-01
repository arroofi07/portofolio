import React, { useState, createContext } from "react";



export const ThemeContext: any = createContext(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }} >
      {children}
    </ThemeContext.Provider>
  )


}