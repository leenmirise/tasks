import React from 'react';
import TaskItem from "./TaskItem";
import style from './styles/content.module.css';

const TaskList = ({tasks, remove, update}) => {
    return (
        <div className={style.list}>
            <h1>To-do list</h1>
            {tasks.map((task, index) =>
                <TaskItem remove={remove} update={update} number={index+1} task={task} key={task.id}/>
            )}
        </div>
    );
};

export default TaskList;