import React from 'react';
import {
  ItemsContainer,
  ItemsListContainer,
  ItemList,
} from '../../styles/Items';
import TodoListItem from '../Todo/TodoListItem';
import { useSelector } from 'react-redux';

interface doneTasksState {
  tasks: Task[];
}

const Done = () => {
  const doneTodos = useSelector((state: doneTasksState) =>
    state.tasks.filter((task) => task.state === 'done'),
  );
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
