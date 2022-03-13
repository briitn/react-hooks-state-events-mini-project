import React from "react";

function Task({ text, category}) {
 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"
      onClick={event=>(event.target.parentElement.remove())}>
      X</button>
    </div>
  );



}

export default Task;
