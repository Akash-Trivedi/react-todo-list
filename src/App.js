import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import NewTodo from './MyComponents/NewTodo';

function App() {
  return (
    <>
    <Header title="Todo List"/>
    <NewTodo />
    <Todos />
    <Footer />
    </>
  );
}

export default App;
