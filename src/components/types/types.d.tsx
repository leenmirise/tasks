import { Dispatch, SetStateAction } from 'react';

export interface Task {
  id: number;
  taskText: string;
}

export interface ModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  task: Task;
  remove: (task: Task) => void;
}

export interface TaskFormProps {
  create: (newTask: Task) => void;
}

export interface TaskItemProps {
  remove: (task: Task) => void;
  update: (task: Task, editedText: string) => void;
  number: number;
  task: Task;
  key: number;
}

export interface TaskListProps {
  tasks: Task[];
  remove: (task: Task) => void;
  update: (task: Task, editedTask: string) => void;
}
