import { FC } from 'react';
import { ModalProps } from './types/types.d';
import { ModalContent, ModalStyle, Buttons } from './styles/styles';

const Modal: FC<ModalProps> = ({ visible, setVisible, task, remove }) => {
  const deleteTask = () => {
    remove(task);
    setVisible(false);
  };

  return (
    <ModalStyle visible={visible} onClick={() => setVisible(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete this task?</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Buttons onClick={deleteTask}>Yes</Buttons>
          <Buttons onClick={() => setVisible(false)}>No</Buttons>
        </div>
      </ModalContent>
    </ModalStyle>
  );
};

export default Modal;
