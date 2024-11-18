// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const rootElement = document.getElementById('root');
  //   if (isDarkMode) {
  //     rootElement.classList.add('dark-theme');
  //     rootElement.classList.remove('light-theme');
  //   } else {
  //     rootElement.classList.add('light-theme');
  //     rootElement.classList.remove('dark-theme');
  //   }
  // }, [isDarkMode]);





  useEffect(() => {
    // Изменение классов на уровне документа
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isDarkMode) {
    //  htmlElement.classList.add('dark-theme');
     // htmlElement.classList.remove('light-theme');
      bodyElement.classList.add('dark-theme');
      bodyElement.classList.remove('light-theme');

    } else {
    //  htmlElement.classList.add('light-theme');
     // htmlElement.classList.remove('dark-theme');
      bodyElement.classList.add('light-theme');
      bodyElement.classList.remove('dark-theme');

    }
  }, [isDarkMode]);







  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
