import React from 'react';
import TodoListItem from './TodoListItem';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import { useSelector } from 'react-redux';

interface TodoState {
  todoTasks: Task[];
}

const TodoList = () => {
  const todos = useSelector((state: TodoState) => state.todoTasks);

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
