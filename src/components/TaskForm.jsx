import React, {useState} from 'react';

const TaskForm = ({create}) => {

    const [taskText, setTaskText] = useState('');

    const addNewTask = (e) => {
        e.preventDefault();
        if(taskText !== ''){
            const newTask = {
                id: Date.now(),
                todo: taskText
            };
            create(newTask);
            setTaskText('');
        }
    }

    return (
        <form>
            <input
                type='text'
                placeholder='Enter a new task...'
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />
            <button onClick={addNewTask}>Add a new task</button>
        </form>
    );
};

export default TaskForm;