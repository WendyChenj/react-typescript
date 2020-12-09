import React, { useState } from 'react';
import {
  InputContainer,
  InputTask,
  InputButton,
  InputFormContainer,
  InputCancelButton,
} from '../../styles/InputTask';

interface Props {
  addTodo: AddTodo;
  closeNewTask: CloseNewTask;
}

const AddTodoItem: React.FC<Props> = ({ addTodo, closeNewTask }: Props) => {
  const [text, setText] = useState('');

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
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
        <InputButton onClick={submitHandler}>Submit</InputButton>
        <InputCancelButton onClick={closeNewTask}>Cancel</InputCancelButton>
      </InputFormContainer>
    </InputContainer>
  );
};

export default AddTodoItem;
