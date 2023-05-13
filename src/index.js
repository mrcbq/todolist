import './index.css';
import { addTask, filterTasks, renderTasks } from './methods.js';

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  filterTasks();
  renderTasks();
});

const inputList = document.getElementById('input-list');
const form = document.getElementById('form-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = inputList.value;
  if (description !== '') {
    addTask(description);
    inputList.value = '';
    renderTasks();
  }
});

renderTasks();
