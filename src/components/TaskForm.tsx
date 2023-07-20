import React, { useState, FC } from 'react';
import { TaskFormProps } from './types/types.d';
import style from './styles/content.module.css';

const TaskForm: FC<TaskFormProps> = ({ create }) => {
  const [taskText, setTaskText] = useState('');

  const addNewTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (taskText !== '') {
      const newTask = {
        id: Date.now(),
        taskText: taskText,
      };
      create(newTask);
      setTaskText('');
    }
  };

  return (
    <form>
      <div className={style.forms}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className={style.inputs}
        />
        <button onClick={addNewTask} className={style.buttons}>
          Add a new task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
