import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import CurrentDate from './components/CurrentDate';
import './App.css';

function App() {
  // Загружаем задачи из localStorage при старте
  var savedTasks = localStorage.getItem('tasks');
  var initialTasks = [];
  if (savedTasks) {
    initialTasks = JSON.parse(savedTasks);
  }
  
  var [tasks, setTasks] = useState(initialTasks);
  var [filter, setFilter] = useState('all');
  
  // Сохраняем в localStorage при каждом изменении
  useEffect(function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Добавление задачи
  function handleAddTask(newTask) {
    var newTasks = [];
    for (var i = 0; i < tasks.length; i++) {
      newTasks.push(tasks[i]);
    }
    newTasks.push(newTask);
    setTasks(newTasks);
  }
  
  // Изменение статуса
  function handleStatusChange(taskId, newStatus) {
    var newTasks = [];
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      if (task.id === taskId) {
        // Создаём новую копию задачи с изменённым статусом
        var updatedTask = {
          id: task.id,
          title: task.title,
          deadline: task.deadline,
          status: newStatus,
          createdAt: task.createdAt
        };
        newTasks.push(updatedTask);
      } else {
        newTasks.push(task);
      }
    }
    setTasks(newTasks);
  }
  
  // Удаление задачи
  function handleDeleteTask(taskId) {
    var newTasks = [];
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id !== taskId) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  }
  
  // Изменение фильтра
  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }
  
  return (
    <div className="App">
      <h1>Менеджер задач</h1>
      
      <CurrentDate />
      
      <AddTaskForm onAddTask={handleAddTask} />
      
      <Filter 
        filter={filter} 
        onFilterChange={handleFilterChange} 
      />
      
      <TaskList
        tasks={tasks}
        filter={filter}
        onStatusChange={handleStatusChange}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;