// Type Checking Reducers: reducers are just pure functions that take the previous state, an action and then return the next state.

import {
  TasksState,
  ActionTypes,
  ADD_NEW_TASK,
  TASK_EDIT_STATE,
} from '../actions/types';

const initialTasks: Task[] = [
  {
    id: 1,
    text: 'Walk the dog',
    state: 'todo',
  },
  {
    id: 2,
    text: 'Write app',
    state: 'inProgress',
  },
  {
    id: 3,
    text: 'Personal Website: www.hiwendychen.com/',
    state: 'done',
  },
];

const initialState: TasksState = {
  tasks: initialTasks,
};

export function reducer(state = initialState, action: ActionTypes): TasksState {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks].concat(action.payload),
      };
    case TASK_EDIT_STATE:
      const newTask: Task = {
        id: action.payload.id,
        text: action.newText,
        state: action.newState,
      };
      return {
        ...state,
        tasks: [...state.tasks]
          .filter((task) => task.id !== action.payload.id)
          .concat(newTask),
      };
    default:
      return state;
  }
}
