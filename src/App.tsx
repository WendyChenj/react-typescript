import React from 'react';
import TodoListItem from './components/TodoListItem';
import './App.css';

interface Todo {
  text: string;
  complete: boolean;
}

const todos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <TodoListItem todo={todos[0]} />
    </div>
  );
}

export default App;
