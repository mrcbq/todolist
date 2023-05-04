import './index.css';

const tasks = [
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

const tasksContainer = document.getElementById('tasks-container');

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const textarea = document.createElement('input');
  const dotsButton = document.createElement('input');

  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('tabindex', '0');
  checkbox.setAttribute('alt', 'Check!');

  textarea.setAttribute('maxlength', '255');
  textarea.value = task.description;

  dotsButton.setAttribute('type', 'button');
  dotsButton.setAttribute('tabindex', '-1');
  dotsButton.setAttribute('value', '');
  dotsButton.setAttribute('title', 'click and sostain for rearrange');
  dotsButton.classList.add('input-btn-dots');

  textarea.addEventListener('click', () => {
    dotsButton.classList.add('active');
  });

  document.addEventListener('click', (event) => {
    if (!textarea.contains(event.target)) {
      dotsButton.classList.remove('active');
    }
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(textarea);
  listItem.appendChild(dotsButton);

  tasksContainer.appendChild(listItem);
});
