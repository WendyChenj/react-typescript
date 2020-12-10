// define the state type

// todo: edit dialog and remove action
export interface TasksState {
  todoTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
}

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const MOVE_TO_TODO = 'MOVE_TO_TODO';
export const MOVE_TO_INPROGRESS = 'MOVE_TO_INPROGRESS';
export const MOVE_TO_DONE = 'MOVE_TO_DONE';

interface AddNewTaskAction {
  type: typeof ADD_NEW_TASK;
  payload: Task;
}

interface MoveTodoAction {
  type: typeof MOVE_TO_TODO;
  payload: Task;
}

interface MoveToInProgressAction {
  type: typeof MOVE_TO_INPROGRESS;
  payload: Task;
}

interface MoveToDoneAction {
  type: typeof MOVE_TO_DONE;
  payload: Task;
}

export type ActionTypes =
  | AddNewTaskAction
  | MoveTodoAction
  | MoveToInProgressAction
  | MoveToDoneAction;
