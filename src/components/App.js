import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react/cjs/react.development";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [name,setName]=useState('')
const [cat, setCat]=useState('Code')
function catSetter(event){
  setCat(event.target.value)
  console.log(cat)
}
  function nameSetter(event){
    setName(event.target.value)
console.log(name)
  }
  const [isfiltered, setIsFiltered]=useState('All')
 const [tasks, setTasks]=useState(TASKS)
    function filterStuff(event){
      setIsFiltered(event.target.value)
      event.target.className='selected'
  console.log(isfiltered)
    }
  function handleSubmit(event){
    event.preventDefault()
    const formData={
      category:cat,
      text:name

    }

    const newtask=[...tasks, formData]

    setTasks(newtask)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
      filterStuffs={filterStuff}
      isfiltereds={isfiltered} />
      <NewTaskForm  categories={CATEGORIES}
      onTaskFormSubmit={handleSubmit}
      name={name}
      cat={cat}
      catSetter={catSetter}
      nameSetter={nameSetter}/>
      <TaskList tasks={tasks} 
      isFiltered={isfiltered}/>
    </div>
  );
}

export default App;
