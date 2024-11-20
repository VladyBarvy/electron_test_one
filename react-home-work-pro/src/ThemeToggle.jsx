// ThemeToggle.js
// import React, { useState, useEffect } from 'react';

// const ThemeToggle = () => {

//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });


//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };


//   useEffect(() => {
//     const theme = isDarkMode ? 'dark' : 'light';
//     document.body.className = theme; 
//     localStorage.setItem('theme', theme); 
//   }, [isDarkMode]);

//   return (
//     <label>
//       <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
//       {isDarkMode ? 'Тёмная тема' : 'Светлая тема'}
//     </label>
//   );
// };

// export default ThemeToggle;








// ThemeToggle.jsx
// import React from 'react';
// import { useTheme } from './ThemeContext.jsx';

// const ThemeToggle = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={isDarkMode}
//         onChange={toggleTheme}
//       />
//       {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//     </label>
//   );
// };

// export default ThemeToggle;







import React from 'react';
import { useTheme } from './ThemeContext.jsx';
import './ThemeToggle.css'; // Подключение CSS

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="toggle-container">
      <span className="icon">{isDarkMode ? '🌙' : '☀️'}</span>
      <label className="toggle">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
