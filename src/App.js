import React, {useState, useMemo} from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import style from "./components/styles/content.module.css";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, todo: 'Поспать'},
        {id: 2, todo: 'Доделать задание'},
    ])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    const updateTask = (task, editedText) => {
        const updatedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return { ...t, todo: editedText };
            }
            return t;
        });
        setTasks(updatedTasks);
    }

    const [search, setSearch] = useState('');

    const searchTasks = useMemo(() => {
        return tasks.filter(task => task.todo.toLowerCase().includes(search.toLowerCase()))
    }, [search, tasks])

    return (
        <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
            <div className={style.content}>
                <input
                    type='text'
                    placeholder='Search...'
                    value={search}
                    onChange={e => (setSearch(e.target.value))}
                    className={style.inputs}
                />
                {tasks.length !== 0
                    ? <TaskList tasks={searchTasks} remove={removeTask} update={updateTask}/>
                    : <h1>Tasks not found :(</h1>
                }
                <TaskForm  create={createTask}/>
            </div>
        </div>
    );
}

export default App;
