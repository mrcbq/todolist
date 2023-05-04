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

tasks.forEach((task) => {
  const li = document.createElement('li');
  li.setAttribute('id', task.id);
  li.innerHTML = `
  hello
  `;
});
