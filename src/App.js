import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  const onDelete=(todoindex)=>{

  }
  let list=[
    {
      "sno":"1",
      "title":"grocerry",
      "description":"amul cream, peanuts"
    },
    {
      "sno":"2",
      "title":"gtu form",
      "description":"gtu exam form fees submission"
    },
    {
    "sno":"3",
    "title":"go to bank",
    "description":"change the signature"
    }
  ];
  return (
    <>
    <Header title="Todo List"/>
    <Todos list={list} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;
