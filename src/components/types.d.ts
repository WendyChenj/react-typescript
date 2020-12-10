// the compiler will recognize the types in there as global to the project
// won't need to explicitly import ot export them.

interface Task {
  id: number;
  text: string;
  state: 'todo' | 'inProgress' | 'done';
}

type CloseNewTask = (e: React.MouseEvent) => void;
