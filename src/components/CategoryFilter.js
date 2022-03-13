import React from "react";


function CategoryFilter({categories, filterStuffs, isFiltereds}) {
 
  
  const mapCategories=categories.map(item=>{
    return (
      <button 
      key={item}
      value={item}
     className="pop"
      onClick={filterStuffs}>
        {item}

      
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      mapCategories
      }
     
    </div>
  );
}

export default CategoryFilter;
