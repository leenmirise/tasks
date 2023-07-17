import React, {useState} from 'react';
import style from "./styles/content.module.css";

interface Task {
    id: number;
    taskText: string;
}

interface TaskFormProps {
    create: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({create}) => {

    const [taskText, setTaskText] = useState('');

    const addNewTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
        e.preventDefault();
        if(taskText !== ''){
            const newTask = {
                id: Date.now(),
                taskText: taskText
            };
            create(newTask);
            setTaskText('');
        }
    }

    return (
        <form>
            <div className={style.forms}>
                <input
                    type='text'
                    placeholder='Enter a new task...'
                    value={taskText}
                    onChange={e => setTaskText(e.target.value)}
                    className={style.inputs}
                />
                <button onClick={addNewTask} className={style.buttons}>Add a new task</button>
            </div>
        </form>
    );
};

export default TaskForm;