import React, { useState } from 'react';
import {
  InputContainer,
  InputTask,
  InputButton,
  InputFormContainer,
  InputCancelButton,
  ButtonGroup,
} from '../../styles/InputTask';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface Props {
  closeNewTask: CloseNewTask;
}

const AddTodoItem: React.FC<Props> = ({ closeNewTask }: Props) => {
  const [text, setText] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: {
        id: Math.floor(Math.random() * (300 - 3) + 3),
        text: text,
        state: 'todo',
      },
    });
    setText('');
    closeNewTask(e);
    history.push('/todo');
  };

  return (
    <InputContainer>
      <InputFormContainer>
        ADD A NEW TASK
        <InputTask
          type="text"
          placeholder="Input Task Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonGroup>
          <InputButton
            onClick={submitHandler}
            disabled={text === '' ? true : false}
          >
            Submit
          </InputButton>
          <InputCancelButton onClick={closeNewTask} disabled={false}>
            Cancel
          </InputCancelButton>
        </ButtonGroup>
      </InputFormContainer>
    </InputContainer>
  );
};

export default AddTodoItem;
