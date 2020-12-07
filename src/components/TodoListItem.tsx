import React from 'react';

// define todo item (prop of TodoListItem)
interface Todo {
  text: string;
  complete: boolean;
}

// pass Props as generic
interface Props {
  todo: Todo;
}

const TodoListItem: React.FC<Props> = ({ todo }: Props) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
