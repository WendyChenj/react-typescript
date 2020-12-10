import { ADD_NEW_TASK, TASK_EDIT_STATE, ActionTypes } from './types';

export function addNewTask(newTask: Task): ActionTypes {
  return {
    type: ADD_NEW_TASK,
    payload: newTask,
  };
}

export function taskEditState(
  task: Task,
  newState: 'todo' | 'inProgress' | 'done',
  newText: string,
): ActionTypes {
  return {
    type: TASK_EDIT_STATE,
    payload: task,
    newState: newState,
    newText: newText,
  };
}
