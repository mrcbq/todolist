import tasksObj from './tasks.js';

let tasks = tasksObj.getTasks();

const updateTasks = () => {
  tasksObj.setTasks(tasks);
  tasks = tasksObj.getTasks();
  return tasks;
};

const addTask = (description) => {
  tasks = tasksObj.getTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };
  tasks.push(newTask);
  updateTasks();
};

const deleteTask = (id) => {
  tasks = tasksObj.getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    updateTasks();
  }
};

const editTask = (id, description) => {
  tasks = tasksObj.getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    updateTasks();
  }
};

const toggleCompleted = (id) => {
  tasks = tasksObj.getTasks();
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  updateTasks();
};

const filterTasks = () => {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  filteredTasks.forEach((task, index) => { task.id = index + 1; });
  tasks = filteredTasks;
  tasksObj.setTasks(filteredTasks);
  tasks = tasksObj.getTasks();
  updateTasks();
};

export {
  updateTasks, addTask, deleteTask, editTask, toggleCompleted, filterTasks,
};
