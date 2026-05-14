import React from 'react';

function Filter(props) {
  function handleFilterChange(event) {
    props.onFilterChange(event.target.value);
  }
  
  return (
    <div className="filter-container">
      <label>Фильтр по статусу: </label>
      <select 
        value={props.filter} 
        onChange={handleFilterChange}
        className="filter-select"
      >
        <option value="all">Все задачи</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default Filter;