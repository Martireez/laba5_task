import React from 'react';
import TaskItem from './TaskItem';

function TaskList(props) {
  var tasks = props.tasks;
  var filter = props.filter;
  
  // Фильтруем задачи по статусу
  var filteredTasks = [];
  for (var i = 0; i < tasks.length; i++) {
    if (filter === 'all' || tasks[i].status === filter) {
      filteredTasks.push(tasks[i]);
    }
  }
  
  if (filteredTasks.length === 0) {
    return (
      <div className="task-list">
        <h2>Задачи</h2>
        <p className="empty-message">Задач пока нет</p>
      </div>
    );
  }
  
  var taskElements = [];
  for (var j = 0; j < filteredTasks.length; j++) {
    var task = filteredTasks[j];
    taskElements.push(
      <TaskItem
        key={task.id}
        task={task}
        onStatusChange={props.onStatusChange}
        onDelete={props.onDeleteTask}
      />
    );
  }
  
  return (
    <div className="task-list">
      <h2>Задачи ({filteredTasks.length})</h2>
      {taskElements}
    </div>
  );
}

export default TaskList;