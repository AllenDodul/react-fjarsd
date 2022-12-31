import React,{useState} from "react";

import {v4 as uuidv4} from "uuid";
import NewTodo from "./NewTodo"
import Todos from "./Todos";
import "./style.css";


export default function App() {
  const [allTodos, setAllTodos] = useState([]);

  const getNewTodo = (todo) =>{
    setAllTodos((oldTodo)=>{
      return [...oldTodo, {id: uuidv4(), todo}];
    });
  }

  const handleRemoveTodos = (id) =>{
    setAllTodos((prevTodos)=>{
      const filterdTodos = prevTodos.filter((todo)=> todo.id !== id);
      return filterdTodos;
    });
  }

  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <NewTodo  getNewTodo={getNewTodo}/>
      <Todos getTodos={allTodos} onRemoveTodos={handleRemoveTodos}/>
    </div>
  );
}
