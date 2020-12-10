import React from 'react';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import TodoListItem from '../Todo/TodoListItem';
import { useSelector } from 'react-redux';

interface inProgressState {
  inProgressTasks: Task[];
}

const InProgress = () => {
  const inProgressTodos = useSelector(
    (state: inProgressState) => state.inProgressTasks,
  );
  return (
    <ItemsContainer>
      <ItemsListContainer>
        {inProgressTodos.map((todo) => {
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

export default InProgress;
