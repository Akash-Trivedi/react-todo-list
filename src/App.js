import './App.css';
import React from 'react';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import NewTodo from './MyComponents/NewTodo';
import TaskList from './tasks'

function App() {
  const [list, modifyList] = React.useState(TaskList);
  const linkToCopyright = 'https://github.com/Akash-Trivedi';

  return (
    <>
      <Header title="Todo List" />
      <NewTodo list={list} fun={modifyList} />
      <br />
      <Todos list={list} fun={modifyList} />
      <Footer link={linkToCopyright} />
    </>
  );
}

export default App;
