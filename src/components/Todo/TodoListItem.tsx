import React from 'react';

// pass Props as generic
interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

// generic type
const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }: Props) => {
  return (
    <div>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />{' '}
        {todo.text}
      </label>
    </div>
  );
};

export default TodoListItem;
