import React, {useState,Component} from 'react';
import './App.css';
import reactDom from 'react-dom';

const Header= ({counter}) => {
  return(<h2>{counter}</h2>)
}

// class App extends Component{
//   state={
//     counter:0,
//     isHeaderVisible: true,
//     todos:['hello','react']
//   }

// clickHandler = () =>{
//   this.setState({counter: this.state.counter+1})
// }
// toggleHeader = () =>{
//   this.setState({isHeaderVisible: !this.state.isHeaderVisible});
// }
// channgeSmthInTodos = () =>{
//   const newArr = [...this.state.todos];
//       newArr[0] = Math.random();
//       this.setState({todos:newArr})
// }

//   render(){
//     // чтобы убрать this.state из дальнейших выражений можно сделать деструктуризацию
//     // const{isHeaderVisible,counter, todos} = this.state;
//     return (
//           <div className="App">
              
//               {this.state.isHeaderVisible && <Header counter = {this.state.counter}/>}
//               <button onClick={this.clickHandler}> increment</button>
//               <button onClick={this.toggleHeader}> Toggle header </button>
//               <button onClick={this.channgeSmthInTodos}> Change Todo list </button>
//               <div>{this.state.todos[0]}</div>
//               <div>{this.state.todos[1]}</div>
//           </div>
//         );
//   }
// }





function App() {
 
  // const [counter, setCounter] = useState(0);
  // const [isHeaderVisible, setIsHeaderVisible] = useState(0);
  // const [todos, setTodos] = useState(['hello','react']);

  const [state,setState] = useState({
    counter:0,
    isHeaderVisible:true,
    todos:['hello', 'react']
  })
  
  const clickHandler = ()=>{
    setState({
      ...state,
      counter: state.counter+1
    })
  }

  const toggleHeader = ()=>{
    setState({
      ...state,
      isHeaderVisible: !state.isHeaderVisible
    })
  }
  
  const channgeSmthInTodos = ()=>{
    const newArr = [...state.todos];
    newArr[0] = Math.random();
    setState({
      ...state,
      todos:newArr
    })
  }
  
  return (
    <div className="App">
        
        {state.isHeaderVisible && <Header counter = {state.counter}/>}
        <button onClick={clickHandler}> increment</button>
        <button onClick={toggleHeader}> Toggle header </button>
        <button onClick={channgeSmthInTodos}> Change Todo list </button>
        <div>{state.todos[0]}</div>
        <div>{state.todos[1]}</div>
    </div>
  );
}

export default App;
