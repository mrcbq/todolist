import './index.css';
import {
  addTask,
  deleteTask,
  editTask,
  updateTasks,
  toggleCompleted,
} from './methods.js';
import tasksObj from './tasks.js';

let tasks = updateTasks();

const tasksContainer = document.getElementById('tasks-container');
function renderTasks() {
  tasksContainer.innerHTML = '';
  tasks.forEach((task, idx) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const textarea = document.createElement('input');
    const dotsButton = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('tabindex', '0');
    checkbox.setAttribute('alt', 'Check!');
    checkbox.checked = task.completed;

    textarea.setAttribute('maxlength', '255');
    textarea.value = task.description;

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
    listItem.appendChild(textarea);
    listItem.appendChild(dotsButton);

    tasksContainer.appendChild(listItem);

    textarea.addEventListener('input', () => {
      editTask(idx, textarea.value);
    });

    checkbox.addEventListener('change', () => {
      toggleCompleted(idx);
      renderTasks();
    });

    dotsButton.addEventListener('click', () => {
      deleteTask(idx);
      renderTasks();
    });
  });
}

document.getElementById('clear-btn').addEventListener('click', () => {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  filteredTasks.forEach((task, index) => {
    task.id = index;
  });
  tasks = filteredTasks;
  tasksObj.setTasks(filteredTasks);
  tasks = tasksObj.getTasks();
  renderTasks();
});

const inputList = document.getElementById('input-list');
const form = document.getElementById('form-input');
form.addEventListener('submit', () => {
  const description = inputList.value;
  if (description !== '') {
    addTask(description);
    inputList.value = '';
    renderTasks();
  }
});

renderTasks();
