import React, { useState, useEffect } from 'react';
import './ToDoList.css'
import { uniqueId } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TaskCard from './TaskCard.jsx'




const ToDoList = ({ tasks }) => {
  return (
    <div className="task-container-1">
      {tasks.map((task, index) => (
        <div className="task-card-wrapper" key={index}>
          <TaskCard  task={task} />
        </div>
      ))}
    </div>
  );
};

export default ToDoList;


// https://htmlweb.ru/html/symbols.php?ysclid=m2qhxynm4y418132228
// ✔️
