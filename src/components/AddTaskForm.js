import React from 'react';

function AddTaskForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    
    var form = event.target;
    var title = form.title.value;
    var deadline = form.deadline.value;
    
    if (title.trim() === '') {
      alert('Введите название задачи');
      return;
    }
    
    if (deadline === '') {
      alert('Выберите дедлайн');
      return;
    }
    
    var newTask = {
      id: Date.now(),
      title: title,
      deadline: deadline,
      status: 'todo',
      createdAt: new Date().toLocaleString('ru-RU')
    };
    
    props.onAddTask(newTask);
    form.reset();
  }
  
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <h2>Добавить задачу</h2>
      
      <div className="form-group">
        <label>Название:</label>
        <input 
          type="text" 
          name="title" 
          placeholder="Введите название задачи"
          required 
        />
      </div>
      
      <div className="form-group">
        <label>Дедлайн:</label>
        <input 
          type="datetime-local" 
          name="deadline"
          required 
        />
      </div>
      
      <button type="submit" className="btn-add">Добавить задачу</button>
    </form>
  );
}

export default AddTaskForm;