import './index.css';
import {
  addTask,
  deleteTask,
  editTask,
  updateTasks,
  toggleCompleted,
  filterTasks,
} from './methods.js';

const tasksContainer = document.getElementById('tasks-container');
function renderTasks() {
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

document.getElementById('clear-btn').addEventListener('click', () => {
  filterTasks();
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
