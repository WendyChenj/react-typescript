import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoItemContainer, EditButton } from '../../styles/Items';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import Modal from '../../styles/Modal';
import {
  InputContainer,
  InputTask,
  InputButton,
  InputFormContainer,
  InputCancelButton,
  ButtonGroup,
  Select,
} from '../../styles/InputTask';

// pass Props as generic
interface Props {
  todo: Task;
}

// generic type
const TodoListItem: React.FC<Props> = ({ todo }: Props) => {
  const [editOpen, setEditOpen] = useState(false);
  const [text, setText] = useState(todo.text);
  const [taskState, setTaskState] = useState(todo.state);

  const dispatch = useDispatch();

  const editTaskHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setEditOpen(true);
  };

  const stateChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setTaskState(e.target.value as 'todo' | 'inProgress' | 'done');
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'TASK_EDIT_STATE',
      payload: { id: todo.id, text: text, state: taskState },
      newState: taskState,
      newText: text,
    });
  };

  const editTaskCancelledHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setEditOpen(false);
  };

  return (
    <TodoItemContainer>
      {todo.text}
      <EditButton onClick={editTaskHandler}>
        <Edit size={24} />
      </EditButton>
      <Modal show={editOpen}>
        <InputContainer>
          <InputFormContainer>
            Edit Task
            <InputTask
              type="text"
              placeholder="Input Task Name"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Select value={taskState} onChange={stateChangeHandler}>
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </Select>
            <ButtonGroup>
              <InputButton disabled={false} onClick={submitHandler}>
                Submit
              </InputButton>
              <InputCancelButton
                disabled={false}
                onClick={editTaskCancelledHandler}
              >
                Cancel
              </InputCancelButton>
            </ButtonGroup>
          </InputFormContainer>
        </InputContainer>
      </Modal>
    </TodoItemContainer>
  );
};

export default TodoListItem;
