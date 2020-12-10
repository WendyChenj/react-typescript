import React from 'react';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import TodoListItem from '../Todo/TodoListItem';
import { useSelector } from 'react-redux';

interface inProgressState {
  tasks: Task[];
}

const InProgress = () => {
  const inProgressTodos = useSelector((state: inProgressState) =>
    state.tasks.filter((task) => task.state === 'inProgress'),
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
