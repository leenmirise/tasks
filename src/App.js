import React, {useState, useMemo} from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

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
        <div className="App">
            <input
                type='text'
                placeholder='Filter...'
                value={search}
                onChange={e => (setSearch(e.target.value))}
            />
            {tasks.length !== 0
                ? <TaskList tasks={searchTasks} remove={removeTask} update={updateTask}/>
                : <h1>Tasks not found :(</h1>
            }
            <TaskForm  create={createTask}/>
        </div>
    );
}

export default App;
