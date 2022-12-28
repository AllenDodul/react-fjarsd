import React,{useState} from "react";
import style from "./newTodo.module.css";

const NewTodo = (props) =>{
  const [todo, setTodo] = useState({
    title: '',
    desc: ''
  });
  
  const {title, desc} = todo;

  const handleTodo = (event) =>{
    const name = event.target.name;
    
    setTodo((oldTodo)=>{
      return {...oldTodo, [name]: event.target.value};
    });
  }

  const submitForm = (event) =>{
    event.preventDefault();
    props.getNewTodo(todo);
    setTodo({
      title: '',
      desc: ''
    });
  }

  return(
    <form className={style.form} onSubmit={submitForm}>
      <div className={style.inputBox}>
        <input 
          className={style.inputFild}
          type="text"
          name="title"
          value={title}
          onChange={handleTodo}
        />
        <textarea 
          className={style.inputFild}
          name="desc"
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