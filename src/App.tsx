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

function App() {
  const [openNewTask, setOpenNewTask] = useState(false);

  const openNewTaskHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenNewTask(true);
  };

  const closeNewTaskHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenNewTask(false);
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
            <Route exact path="/todo" component={TodoList} />
          </Switch>
          <FabButton onClick={openNewTaskHandler}>
            <Fab size={65} />
          </FabButton>
        </ContentContainer>
      </Container>
      <Modal show={openNewTask}>
        <AddTodoItem closeNewTask={closeNewTaskHandler} />
      </Modal>
    </Router>
  );
}

export default App;
