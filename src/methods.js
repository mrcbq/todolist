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
  filteredTasks.forEach((task, index) => {
    task.id = index + 1;
  });
  tasks = filteredTasks;
  tasksObj.setTasks(filteredTasks);
  tasks = tasksObj.getTasks();
  updateTasks();
};

function renderTasks() {
  const tasksContainer = document.getElementById('tasks-container');
  const tasks = updateTasks();
  tasksContainer.innerHTML = '';
  tasks.forEach((task, idx) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const input = document.createElement('input');
    const dotsButton = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('tabindex', '0');
    checkbox.setAttribute('alt', 'Check!');
    checkbox.checked = task.completed;

    input.setAttribute('maxlength', '255');
    input.value = task.description;

    const attrs = {
      type: 'button',
      tabindex: '-1',
      value: '',
      title: 'click and sostain for rearrange',
      class: 'input-btn-dots',
    };

    Object.entries(attrs).forEach(([key, value]) => {
      dotsButton.setAttribute(key, value);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(input);
    listItem.appendChild(dotsButton);

    tasksContainer.appendChild(listItem);

    input.addEventListener('input', () => {
      editTask(idx + 1, input.value);
    });

    checkbox.addEventListener('change', () => {
      toggleCompleted(idx + 1);
      renderTasks();
    });

    dotsButton.addEventListener('click', () => {
      deleteTask(idx + 1);
      renderTasks();
    });
  });
}

export {
  updateTasks,
  addTask,
  deleteTask,
  editTask,
  toggleCompleted,
  filterTasks,
  renderTasks,
};
