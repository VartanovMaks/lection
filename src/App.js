import React, {useState} from 'react';
import './App.css';
import reactDom from 'react-dom';

const Header= ({counter}) => {
  return(<h2>{counter}</h2>)
}

function App() {
 
  //let counter =0;
  const [counter, setCounter] = useState(0);
  
  const clickHandler = ()=>{
    setCounter(counter+1);
    console.log(counter);
  }
  return (
    <div className="App">
        <Header counter = {counter}/>
        <button onClick={clickHandler}> increment</button>
    </div>
  );
}

export default App;
