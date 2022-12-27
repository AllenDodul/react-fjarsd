import React from "react";

import NewTodo from "./NewTodo"
import Todos from "./Todos";
import "./style.css";


const todos = [
  {
    id: 1,
    title: "Breakfast",
    desc: "Finish breakfast at 9:00..." 
  },
  {
    id: 2,
    title: "Join Meeting",
    desc: "Join Meeting at 10:00..." 
  }
];

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <NewTodo />
      <Todos getTodos={todos}/>
    </div>
  );
}
