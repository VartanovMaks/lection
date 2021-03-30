import React, {Component} from 'react';

let interval;
class Comp extends Component {
  
  componentDidMount() {
    console.log('child componentDidMount')
    interval = setInterval( ()=>{
      console.log('fetching daTA')
    },2000)
  }
  
  componentWillUnmount() {
    console.log('child componentWillUnmount')
    clearInterval(interval)
    
  }
  
  
  render() {
    console.log('child render')
    return (
      <h1>
        Component to remove
      </h1>
    );
  }
}

class App extends Component {
state = {
  counter:0
}

componentDidMount() {
  console.log('componentDidMount')
}

componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate',{prevProps, prevState})
  
}


incCounter = ()=>{
  this.setState({counter:this.state.counter+1})
}
  render() {
   
    console.log('render')
    {this.state.counter>5 && this.setState({counter:0})}
    return (
      <div>
        <h1 onClick={this.incCounter}> Hello react {this.state.counter} </h1>
         {/* !!this.state.counter - приведение к булевому типу!! */}
        {!!(this.state.counter % 2) && <Comp />}
      </div>
    );
  }
}

export default App;