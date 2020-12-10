import React from 'react';
import TodoListItem from './TodoListItem';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import { useSelector } from 'react-redux';

interface TodoState {
  tasks: Task[];
}

const TodoList = () => {
  const todos = useSelector((state: TodoState) =>
    state.tasks.filter((task) => task.state === 'todo'),
  );

  console.log(todos);

  return (
    <ItemsContainer>
      <ItemsListContainer>
        {todos.map((todo) => {
          return (
            <ItemList key={todo.text}>
              <TodoListItem todo={todo} />
            </ItemList>
          );
        })}
      </ItemsListContainer>
    </ItemsContainer>
  );
};

export default TodoList;
