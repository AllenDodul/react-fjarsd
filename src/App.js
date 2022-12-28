import React,{useState} from "react";

import NewTodo from "./NewTodo"
import Todos from "./Todos";
import "./style.css";


export default function App() {
  const [allTodos, setAllTodos] = useState([]);

  const getNewTodo = (todo) =>{
    setAllTodos((oldTodo)=>{
      return [...oldTodo, {todo}];
    });
  }

  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <NewTodo  getNewTodo={getNewTodo}/>
      <Todos getTodos={allTodos}/>
    </div>
  );
}
