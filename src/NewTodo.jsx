import React from "react";
import style from "./newTodo.module.css";

const NewTodo = () =>{
  return(
    <form className={style.form}>
      <div className={style.inputBox}>
        <input 
          type="text"
        />
        <textarea/>
      </div>
      <div>
        <button>Add Todo</button>
      </div>
    </form>
  )
}
export default NewTodo;