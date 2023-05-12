import 'jest-localstorage-mock';
import renderTasks from './index.js';
import tasksObj from './tasks.js';

const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

// const tasksContainer = dom.window.document.getElementById('tasks-container');
const tasksContainer = document.createElement('ul');
// Tests that renderTasks function renders all tasks in the tasks array.
it('test_render_tasks_renders_all_tasks', () => {
  // Arrange
  const tasks = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: true },
    { id: 3, description: 'Task 3', completed: false },
  ];
  tasksObj.setTasks(tasks);
  const expectedHTML = '<li><input type="checkbox" tabindex="0" alt="Check!"><input maxlength="255" value="Task 1"><input type="button" tabindex="-1" value="" title="click and sostain for rearrange" class="input-btn-dots"></li><li><input type="checkbox" tabindex="0" alt="Check!" checked=""><input maxlength="255" value="Task 2"><input type="button" tabindex="-1" value="" title="click and sostain for rearrange" class="input-btn-dots"></li><li><input type="checkbox" tabindex="0" alt="Check!"><input maxlength="255" value="Task 3"><input type="button" tabindex="-1" value="" title="click and sostain for rearrange" class="input-btn-dots"></li>';

  // Act
  renderTasks();
  const actualHTML = tasksContainer.innerHTML;

  // Assert
  expect(actualHTML).toEqual(expectedHTML);
});
