import React, {Component, useEffect, useState} from 'react';
const url='https://jsonplaceholder.typicode.com/todos'

const App =()=>{
  const[counter, setCounter] = useState(0);
  const[todos, setTodos] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  
  const incCounter = ()=> {
    setCounter(counter+1)
  }

  const fetchTodos = async ()=>{
    setIsLoading(true)
    const respose = await fetch(url)
    const data = await respose.json()
    console.log(data)
    setTodos(data)
    //setTimeout(()=>{
      setIsLoading(false)
    //}, 1000)
  }
  
  useEffect( ()=>{
    fetchTodos()
  }, [])


  return (
    <>
        <h1 onClick={incCounter}> Hello react {counter} </h1>
        { !todos.length && isLoading &&(
            <h1>LOADING DATA....</h1>
        )}
        {!!todos.length && (
        <>
          <hr />
          <h3>{todos[0].title} - {todos[0].completed.toString()} - id:{todos[0].id} </h3>
          <hr />
        </>
        )}
    </>
  )
}

export default App;