import React, { useState } from 'react';
import TaskAdd from './TaskAdd.jsx'
import './CreateTaskButt.css';

const CreateTaskButt = ({ onCreateTask }) => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  const handleSubmitTask = (task) => {
    onCreateTask(task);
    handleCloseForm();
  };

  return (
    <>
      <button onClick={handleOpenForm}>Создать задачу</button>

      {isFormOpen && (
        <div className="task-form-modal">
          <h2>Создание задачи</h2>
          <TaskAdd onSubmit={handleSubmitTask} onCancel={handleCloseForm} />
        </div>
      )}
    </>
  );
};

export default CreateTaskButt;
