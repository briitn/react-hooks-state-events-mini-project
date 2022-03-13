import React from "react";

function NewTaskForm({categories, onTaskFormSubmit,name,cat,nameSetter,catSetter}) {
  
  const mapCategories=categories.map(item=>{
    if (item==="All"){
      return true
    }
    else 
    return(
      <option key={item}
      value={item}>{item}
      </option>
    )})
  return (
    <form className="new-task-form"
    onSubmit={onTaskFormSubmit} >
      <label>
        Details
        <input type="text" 
        name={name}

        value={name}
        onChange={nameSetter}/>
      </label>
      <label>
        Category
        <select name="category"
        onChange={catSetter}>
          {mapCategories}
        </select>
      </label>
      <input type="submit" value="Add task"
      />
    </form>
  );
}

export default NewTaskForm;
