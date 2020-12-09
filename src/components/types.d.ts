// the compiler will recognize the types in there as global to the project
// won't need to explicitly import ot export them.

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type CloseNewTask = (e: React.MouseEvent) => void;
