import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
import "./App.css"


const firstLoad = () => {
  if (window.localStorage.getItem("autosave-data")) {
    
      return window.localStorage.getItem("autosave-data");
  }
  else{
    return null;
  }
}
let  p =firstLoad();
let k; 
if(p){
  k = JSON.parse(firstLoad());
}
else{
  k=[];
}

const App = () => {
  const [state,dispatch] = useReducer(todoReducer, k) 
  console.log(state)
  return (
    <>
      <div id='heading'>Todo List</div>
      <div id='mainDiv'>
        <div id="addTodo">
          <AddTodo dispatch={dispatch}/>
        </div>
        <div id="items">
        
        {state?state.map((currentState)=>
        <Todo key={currentState.id} dispatch={dispatch} currentState = {currentState}/>):null}
        </div>
      </div>
    </>
  )
}

export default App;
