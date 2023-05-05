import tasksObj from './tasks.js';

let tasks = tasksObj.getTasks();

function updateTasks() {
  tasksObj.setTasks(tasks);
  tasks = tasksObj.getTasks();
  return tasks;
}

function addTask(description) {
  tasks = tasksObj.getTasks();
  const newTask = {
    id: tasks.length,
    description,
    completed: false,
  };
  tasks.push(newTask);
  updateTasks();
}

function deleteTask(id) {
  tasks = tasksObj.getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index;
    });
    updateTasks();
  }
}

function editTask(id, description) {
  tasks = tasksObj.getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    updateTasks();
  }
}

function toggleCompleted(id) {
  tasks = tasksObj.getTasks();
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  updateTasks();
}

export {
  updateTasks, addTask, deleteTask, editTask, toggleCompleted,
};
