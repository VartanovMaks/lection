import React, {Component} from 'react';

class Comp extends Component {
  
  componentDidMount() {
    console.log('child componentDidMount')
  }
  
  componentWillUnmount() {
    console.log('child componentWillUnmount')
    
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
        <button onClick={this.incCounter}> Increment </button>
        Hello react {this.state.counter}
        <Comp />
      </div>
    );
  }
}

export default App;