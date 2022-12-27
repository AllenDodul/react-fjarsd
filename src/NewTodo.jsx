import React from "react";
import style from "./newTodo.module.css";

const NewTodo = () =>{
  return(
    <form className={style.form}>
      <div className={style.inputBox}>
        <input 
          className={style.inputFild}
          type="text"
        />
        <textarea className={style.inputFild}/>
      </div>
      <div>
        <button className={style.btn}>Add Todo</button>
      </div>
    </form>
  )
}
export default NewTodo;