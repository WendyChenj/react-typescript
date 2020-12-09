import React from 'react';
import TodoListItem from './TodoListItem';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import { useHistory } from 'react-router-dom';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }: Props) => {
  const history = useHistory();
  console.log(history);

  return (
    <ItemsContainer>
      <ItemsListContainer>
        {todos.map((todo) => {
          return (
            <ItemList key={todo.text}>
              <TodoListItem todo={todo} toggleTodo={toggleTodo} />
            </ItemList>
          );
        })}
      </ItemsListContainer>
    </ItemsContainer>
  );
};

export default TodoList;
