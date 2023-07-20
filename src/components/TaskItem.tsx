import { useState, FC } from 'react';
import Modal from './Modal';
import { TaskItemProps } from './types/types.d';
import { Text, Inputs, Buttons, Tasks } from './styles/styles';

const TaskItem: FC<TaskItemProps> = ({ remove, update, number, task }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.taskText);
  const [modal, setModal] = useState(false);

  const checkboxChange = () => {
    setIsChecked(!isChecked);
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
          <Tasks>
            <div>
              <strong>{number}</strong>
              <Inputs type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            </div>
            <div>
              <Buttons onClick={saveClick}>Save</Buttons>
              <Buttons onClick={cancelClick}>Cancel</Buttons>
            </div>
          </Tasks>
        ) : (
          <Tasks>
            <div>
              <strong>{number}</strong>
              <label>
                <input type="checkbox" id={task.id.toString()} checked={isChecked} onChange={checkboxChange} />
                <Text isChecked={isChecked}>{task.taskText}</Text>
              </label>
            </div>
            <div>
              <Buttons onClick={() => setIsEditing(true)}>Edit</Buttons>
              <Buttons onClick={() => setModal(true)}>Delete</Buttons>
            </div>
          </Tasks>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
