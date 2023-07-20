import { useState, FC } from 'react';
import Modal from './Modal';
import style from './styles/content.module.css';
import { TaskItemProps } from './types/types.d';

const TaskItem: FC<TaskItemProps> = ({ remove, update, number, task }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.taskText);
  const [modal, setModal] = useState(false);

  const checkboxChange = () => {
    setIsChecked(!isChecked);
  };

  const textStyle = {
    textDecoration: isChecked ? 'line-through' : 'none',
    color: isChecked ? 'gray' : 'black',
  };

  const saveClick = () => {
    update(task, editedText);
    setIsEditing(false);
  };

  const cancelClick = () => {
    setEditedText(task.taskText);
    setIsEditing(false);
  };

  return (
    <div>
      <Modal visible={modal} setVisible={setModal} task={task} remove={remove}></Modal>
      <div>
        {isEditing ? (
          <div className={style.task}>
            <div>
              <strong>{number}</strong>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className={style.inputs}
              />
            </div>
            <div>
              <button onClick={saveClick} className={style.buttons}>
                Save
              </button>
              <button onClick={cancelClick} className={style.buttons}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className={style.task}>
            <div>
              <strong>{number}</strong>
              <label>
                <input type="checkbox" id={task.id.toString()} checked={isChecked} onChange={checkboxChange} />
                <span style={textStyle}>{task.taskText}</span>
              </label>
            </div>
            <div>
              <button onClick={() => setIsEditing(true)} className={style.buttons}>
                Edit
              </button>
              <button onClick={() => setModal(true)} className={style.buttons}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
