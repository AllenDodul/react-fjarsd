import React from "react";
import style from "./todo.module.css";
import {v4 as uuidv4} from "uuid";

const Todo = (props) => {
  const {title, desc} = props.todo;
  return(
    <div className={style.todoCard} key={uuidv4()}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}
export default Todo;