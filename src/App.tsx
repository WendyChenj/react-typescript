import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TabsTitle from './components/TabsTitle';
import TodoList from './components/Todo/TodoList';
import AddTodoItem from './components/NewTask/AddTodoItem';
import InProgress from './components/InProgress/InProgress';
import Done from './components/Done/Done';
import Header from './styles/Header';
import { Container, ContentContainer } from './styles/Container';
import Modal from './styles/Modal';
import { Fab, FabButton } from './styles/Fab';

const initialTodos: Todo[] = [
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
  const [todos, setTodos] = useState(initialTodos);
  const [openNewTask, setOpenNewTask] = useState(false);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((ele) => {
      if (ele === selectedTodo) {
        return {
          ...ele,
          complete: !ele.complete,
        };
      }
      return ele;
    });
    setTodos(newTodos);
  };

  const openNewTaskHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenNewTask(true);
  };

  const closeNewTaskHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenNewTask(false);
  };

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text: text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <Router>
      <Container>
        <Header>Todo List</Header>
        <TabsTitle />
        <ContentContainer>
          <Switch>
            <Route path="/inProgress" component={InProgress} />
            <Route path="/done" component={Done} />
            <Route exact path="/todo">
              <TodoList todos={todos} toggleTodo={toggleTodo} />
            </Route>
          </Switch>
          <FabButton onClick={openNewTaskHandler}>
            <Fab size={65} />
          </FabButton>
        </ContentContainer>
      </Container>
      <Modal show={openNewTask}>
        <AddTodoItem addTodo={addTodo} closeNewTask={closeNewTaskHandler} />
      </Modal>
    </Router>
  );
}

export default App;
