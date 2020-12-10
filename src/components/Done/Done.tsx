import React from 'react';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import TodoListItem from '../Todo/TodoListItem';
import { useSelector } from 'react-redux';

interface doneTasksState {
  doneTasks: Task[];
}

const Done = () => {
  const doneTodos = useSelector((state: doneTasksState) => state.doneTasks);
  return (
    <ItemsContainer>
      <ItemsListContainer>
        {doneTodos.map((todo) => {
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

export default Done;
