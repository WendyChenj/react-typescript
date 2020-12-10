// Type Checking Reducers: reducers are just pure functions that take the previous state, an action and then return the next state.

import {
  TasksState,
  ActionTypes,
  ADD_NEW_TASK,
  MOVE_TO_TODO,
  MOVE_TO_INPROGRESS,
  MOVE_TO_DONE,
} from '../actions/types';

const initialTodoTasks: Task[] = [
  {
    text: 'Walk the dog',
    state: 'todo',
  },
];

const initialProgressTasks: Task[] = [
  {
    text: 'Write app',
    state: 'inProgress',
  },
];

const initialDoneTasks: Task[] = [
  {
    text: 'Personal Website: www.hiwendychen.com/',
    state: 'done',
  },
];

const initialState: TasksState = {
  todoTasks: initialTodoTasks,
  inProgressTasks: initialProgressTasks,
  doneTasks: initialDoneTasks,
};

export function reducer(state = initialState, action: ActionTypes): TasksState {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        todoTasks: [...state.todoTasks, action.payload],
      };
    case MOVE_TO_TODO:
      return {
        ...state,
        todoTasks: [...state.todoTasks, action.payload],
      };
    case MOVE_TO_INPROGRESS:
      return {
        ...state,
        inProgressTasks: [...state.inProgressTasks, action.payload],
      };
    case MOVE_TO_DONE:
      return {
        ...state,
        doneTasks: [...state.doneTasks, action.payload],
      };
    default:
      return state;
  }
}
