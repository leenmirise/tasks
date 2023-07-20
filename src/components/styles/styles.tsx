import styled from 'styled-components';

export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.input`
  padding: 5px 5px 5px 5px;
  height: 20px;
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 20px;
  width: 60%;
  margin-bottom: 10px;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.button`
  padding: 10px 10px 10px 10px;
  height: 35px;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  background-color: rgba(143, 188, 143, 0.44);
  margin: 0 5px 0 5px;
`;

export const Text = styled.span<{ isChecked: boolean }>`
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
  color: ${({ isChecked }) => (isChecked ? 'gray' : 'black')};
`;

export const Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const ModalStyle = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  padding: 25px;
  border-radius: 15px;
  min-width: 250px;
  background-color: white;
`;
