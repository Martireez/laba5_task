import React from 'react';

function TaskItem(props) {
  var task = props.task;
  
  // Проверяем, просрочена ли задача
  var deadlineDate = new Date(task.deadline);
  var now = new Date();
  var isOverdue = deadlineDate < now && task.status !== 'done';
  
  function getStatusName(status) {
    if (status === 'todo') return 'To Do';
    if (status === 'inprogress') return 'In Progress';
    if (status === 'done') return 'Done';
    return status;
  }
  
  function handleStatusChange(event) {
    var newStatus = event.target.value;
    props.onStatusChange(task.id, newStatus);
  }
  
  return (
    <div className={'task-item ' + (isOverdue ? 'overdue' : '')}>
      <div className="task-info">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-deadline">
          <strong>Дедлайн:</strong> {new Date(task.deadline).toLocaleString('ru-RU')}
        </p>
        <p className="task-created">
          <strong>Создана:</strong> {task.createdAt}
        </p>
        {isOverdue && <p className="overdue-warning">⚠️ Просрочено!</p>}
      </div>
      
      <div className="task-controls">
        <div className="status-select">
          <label>Статус:</label>
          <select 
            value={task.status} 
            onChange={handleStatusChange}
            className={'status-' + task.status}
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        
        <button 
          onClick={function() { props.onDelete(task.id); }}
          className="btn-delete"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default TaskItem;