import React,{useState} from "react";
import style from "./newTodo.module.css";

const NewTodo = () =>{
  const [todo, setTodo] = useState({
    title: '',
    desc: ''
  });
  
  const {title, desc} = todo;
  const handleTodo = (e) =>{

  }
  return(
    <form className={style.form}>
      <div className={style.inputBox}>
        <input 
          className={style.inputFild}
          type="text"
          value={title}
          onChange={handleTodo}
        />
        <textarea 
          className={style.inputFild}
          value={desc}
          onChange={handleTodo}
        />
      </div>
      <div>
        <button className={style.btn}>Add Todo</button>
      </div>
    </form>
  )
}
export default NewTodo;