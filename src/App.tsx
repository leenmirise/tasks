import { useState, useMemo, useCallback } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task } from './components/types/types.d';
import { AppStyle, Content, Inputs } from './components/styles/styles';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, taskText: 'Поспать' },
    { id: 2, taskText: 'Доделать задание' },
  ]);

  const [search, setSearch] = useState('');

  const searchTasks: Task[] = useMemo(() => {
    return tasks.filter((task) => task.taskText.toLowerCase().includes(search.toLowerCase()));
  }, [search, tasks]);

  const createTask = useCallback(
    (newTask: Task) => {
      setTasks((tasks) => [...tasks, newTask]);
    },
    [setTasks],
  );

  const removeTask = useCallback(
    (task: Task) => {
      setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
    },
    [setTasks],
  );

  const updateTask = useCallback(
    (task: Task, editedText: string) => {
      setTasks((tasks) => {
        return tasks.map((t) => {
          if (t.id === task.id) {
            return { ...t, taskText: editedText };
          }
          return t;
        });
      });
    },
    [setTasks],
  );

  return (
    <AppStyle className="App">
      <Content>
        <Inputs type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        {tasks.length !== 0 ? (
          <TaskList tasks={searchTasks} remove={removeTask} update={updateTask} />
        ) : (
          <h3>Tasks not found :(</h3>
        )}
        <TaskForm create={createTask} />
      </Content>
    </AppStyle>
  );
}

export default App;
