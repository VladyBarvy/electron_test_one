// ThemeToggle.js
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Получаем текущую тему из localStorage, если она есть
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Обработчик изменения состояния темы
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Используем эффект для применения темы в body и сохранения выбора в localStorage
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.className = theme; // меняем класс на body
    localStorage.setItem('theme', theme); // сохраняем тему в localStorage
  }, [isDarkMode]);

  return (
    <label>
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      {isDarkMode ? 'Тёмная тема' : 'Светлая тема'}
    </label>
  );
};

export default ThemeToggle;
