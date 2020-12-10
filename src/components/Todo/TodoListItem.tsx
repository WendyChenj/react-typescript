import React from 'react';
import { TodoItemContainer } from '../../styles/Items';
import { Edit } from '@styled-icons/boxicons-regular/Edit';

// pass Props as generic
interface Props {
  todo: Task;
}

// generic type
const TodoListItem: React.FC<Props> = ({ todo }: Props) => {
  return (
    <TodoItemContainer>
      {todo.text}
      <Edit size={24} />
    </TodoItemContainer>
  );
};

export default TodoListItem;
