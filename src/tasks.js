let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

const tasksObj = {
  getTasks() {
    return tasks;
  },
  setTasks(newTasks) {
    tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};

export default tasksObj;