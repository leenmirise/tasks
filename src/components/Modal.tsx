import React, { SetStateAction } from 'react';
import style from './styles/content.module.css';

interface Task {
  id: number;
  taskText: string;
}

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
  task: Task;
  remove: (task: Task) => void;
}

const Modal: React.FC<ModalProps> = ({ visible, setVisible, task, remove }) => {
  const rootClasses: string[] = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  const deleteTask = () => {
    remove(task);
    setVisible(false);
  };

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete this task?</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className={style.buttons} onClick={deleteTask}>
            Yes
          </button>
          <button className={style.buttons} onClick={() => setVisible(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;