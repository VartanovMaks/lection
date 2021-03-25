import React, {useState} from 'react';
import './App.css';
import reactDom from 'react-dom';

const Header= ({counter}) => {
  return(<h2>{counter}</h2>)
}

function App() {
 
  //let counter =0;
  const [counter, setCounter] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(0);
  const [todos, setTodos] = useState(['hello','react']);
  
  const clickHandler = ()=>{
    setCounter(counter+1);
  }

  const toggleHeader = ()=>{
    setIsHeaderVisible(!isHeaderVisible);
  }
  
  const channgeSmthInTodos = ()=>{
    const newArr = [...todos];
    newArr[0] = Math.random();
    setTodos(newArr);
  }
  
  return (
    <div className="App">
        
        {isHeaderVisible && <Header counter = {counter}/>}
        <button onClick={clickHandler}> increment</button>
        <button onClick={toggleHeader}> Toggle header </button>
        <button onClick={channgeSmthInTodos}> Change Todo list </button>
        <div>{todos[0]}</div>
        <div>{todos[1]}</div>
    </div>
  );
}

export default App;
