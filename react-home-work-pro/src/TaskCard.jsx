import React, { useState, useEffect } from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card-one">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Срок:</strong> {task.dueDate}</p>
    </div>
  );
};



export default TaskCard;

