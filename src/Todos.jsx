import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = (props) => {
  return(
    <div className={style.todoContainer}>
      {props.getTodos.map((todo)=>
       <Todo todo={todo}/>
      )}
    </div>
  )
}
export default Todos;