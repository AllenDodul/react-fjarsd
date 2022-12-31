import React from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  const {title, desc} = props.todo;

  const handleRemoveTodo = () =>{
    props.onRemoveTodos(props.id);
  };

  return(
    <div className={style.todoCard}>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div>
        <button type="submit" onClick={handleRemoveTodo}>Delete</button>
      </div>
    </div>
  )
}
export default Todo;