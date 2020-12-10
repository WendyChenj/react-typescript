// define the state type

// todo: edit dialog and remove action
// export type TodoTasks = Task[];

// export type InProgressTasks = Task[];

// export type DoneTasks = Task[];

export interface TasksState {
  // todoTasks: TodoTasks;
  // inProgressTasks: InProgressTasks;
  // doneTasks: DoneTasks;
  tasks: Task[];
}

// export type GroupTypes = TodoTasks | InProgressTasks | DoneTasks;

export const ADD_NEW_TASK = 'ADD_NEW_TASK';
// export const MOVE_TO_TODO = 'MOVE_TO_TODO';
// export const MOVE_TO_INPROGRESS = 'MOVE_TO_INPROGRESS';
// export const MOVE_TO_DONE = 'MOVE_TO_DONE';
export const TASK_EDIT_STATE = 'TASK_EDIT_STATE';

interface AddNewTaskAction {
  type: typeof ADD_NEW_TASK;
  payload: Task;
}

interface TaskEditStateAction {
  type: typeof TASK_EDIT_STATE;
  payload: Task;
  newState: 'todo' | 'inProgress' | 'done';
  newText: string;
}

export type ActionTypes = AddNewTaskAction | TaskEditStateAction;
