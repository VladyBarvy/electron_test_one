import React, { useState, useEffect } from 'react'
import './ToDoMain.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import TaskAdd from './TaskAdd.jsx'
import ToDoList from './ToDoList.jsx'
import CreateTaskButt from './CreateTaskButt.jsx'


const ToDoMain = () => {
  const [tasks, setTasks] = useState([]);
  const { isDarkMode } = useTheme(); // Получаем текущую тему

  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  //const [isDarkMode, setIsDarkMode] = useState(false); // Стейт для отслеживания текущей темы


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




  
  // const toggleTheme = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  return (

    <div className="main-card-1">

      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div className="head_title_name">
        <h1 className="change-text">Task lisT</h1>

      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div>
        <ThemeToggle />
        <CreateTaskButt onCreateTask={handleCreateTask} />
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      <div>
        <ToDoList tasks={tasks} />
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}




    </div>
  );

};

export default ToDoMain;








/*

       <div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
        </button>
      </div> 


       <div className="toggle-button-cover">
        <div className="button r" id="button-3">
          <input type="checkbox" className="checkbox" onClick={toggleTheme} />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>




      <div>
        <label class="toggle">
          <input class="toggle-checkbox" type="checkbox" />
          <div class="toggle-switch"></div>
          <span class="toggle-label">Wi-fi</span>
        </label>
      </div> 






       <div className="theme-toggle-container">
        <label className="theme-toggle">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="theme-toggle-checkbox"
          />
          <span className="theme-toggle-slider"></span>
        </label>
      </div> 
*/
