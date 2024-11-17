import React, { useState } from 'react';

import './TaskAdd.css';

const TaskAdd = ({ onSubmit, onCancel }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Тема задачи:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Текст задачи:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Дата и время срока:</label>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Добавить задачу</button>
        <button type="button" onClick={onCancel}>Отменить</button>
      </div>
    </form>
  );
};

export default TaskAdd;
