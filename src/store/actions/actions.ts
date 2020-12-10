import {
  ADD_NEW_TASK,
  MOVE_TO_TODO,
  MOVE_TO_INPROGRESS,
  MOVE_TO_DONE,
  ActionTypes,
} from './types';

export function addNewTask(newTask: Task): ActionTypes {
  return {
    type: ADD_NEW_TASK,
    payload: newTask,
  };
}

export function moveTodo(task: Task): ActionTypes {
  return {
    type: MOVE_TO_TODO,
    payload: task,
  };
}

export function moveInProgress(task: Task): ActionTypes {
  return {
    type: MOVE_TO_INPROGRESS,
    payload: task,
  };
}

export function moveDone(task: Task): ActionTypes {
  return {
    type: MOVE_TO_DONE,
    payload: task,
  };
}
