import React, { useState, FC } from 'react';
import { TaskFormProps } from './types/types.d';
import { Forms, Buttons, Inputs } from './styles/styles';

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
      <Forms>
        <Inputs
          type="text"
          placeholder="Enter a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Buttons onClick={addNewTask}>Add a new task</Buttons>
      </Forms>
    </form>
  );
};

export default TaskForm;
