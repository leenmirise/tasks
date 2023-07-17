import React from "react";
import TaskItem from "./TaskItem";
import style from './styles/content.module.css';

interface Task {
    id: number;
    taskText: string;
}

interface TaskListForm {
    tasks: Task[];
    remove: (task: Task) => void;
    update: (task: Task, editedTask: string) => void;
}

const TaskList: React.FC<TaskListForm> = ({tasks, remove, update}) => {
    return (
        <div className={style.list}>
            <h3>To-do list</h3>
            {tasks.map((task, index) =>
                <TaskItem remove={remove} update={update} number={index+1} task={task} key={task.id}/>
            )}
        </div>
    );
};

export default TaskList;