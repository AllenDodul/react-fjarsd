import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return(
    <div>
      {props.getTodos.map(()=>
        <Todo />
      )}
    </div>
  )
}
export default Todos;