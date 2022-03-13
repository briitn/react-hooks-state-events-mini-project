import React from "react";
import Task from "./Task";
function TaskList({tasks, isFiltered}) {
 

  const tasksList=tasks.map(item=>{
  if (item.category===isFiltered){
   return(
     <Task 
     key={item.text}
     food={item.text}
     category={item.category}/>
   )}
   else if(isFiltered==='All'){
    return(
      <Task 
      key={item.text}
      text={item.text}
      category={item.category}/>
    ) 
   }
return true
  
  }
  );
  
  
  return (
    <div className="tasks">
  <main>{tasksList}</main>
    </div>
  );
}

export default TaskList;
