let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [
  {
    id: 0,
    description: 'wash the dishes',
    completed: false,
  },
  {
    id: 1,
    description: 'Complete the to-do list project',
    completed: false,
  },
  {
    id: 2,
    description: 'take a rest',
    completed: true,
  },
];

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