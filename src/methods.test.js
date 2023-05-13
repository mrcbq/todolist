import {
  addTask,
  deleteTask,
  editTask,
  filterTasks,
  updateTasks,
} from './methods.js';
import tasksObj from './tasks.js';

describe('addTask', () => {
  test('should add a task with a valid description to the tasks array', () => {
    // Arrange
    const initialTasks = [{ id: 1, description: 'Task 1', completed: false }];
    tasksObj.setTasks(initialTasks);
    const description = 'Task 2';
    // Act
    addTask(description);
    const updatedTasks = tasksObj.getTasks();
    // Assert
    expect(updatedTasks.length).toBe(2);
    expect(updatedTasks[1].description).toBe(description);
  });

  test('should add multiple tasks with valid descriptions to the tasks array', () => {
    // Arrange
    const initialTasks = [{ id: 1, description: 'Task 1', completed: false }];
    tasksObj.setTasks(initialTasks);
    const descriptions = ['Task 2', 'Task 3'];
    // Act
    descriptions.forEach((description) => addTask(description));
    const updatedTasks = tasksObj.getTasks();
    // Assert
    expect(updatedTasks.length).toBe(3);
    expect(updatedTasks[1].description).toBe(descriptions[0]);
    expect(updatedTasks[2].description).toBe(descriptions[1]);
  });
});

describe('deleteTask', () => {
  test('should delete a task from the tasks array when given a valid id', () => {
    // Arrange
    const id = 2;
    const initialTasks = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' },
    ];
    tasksObj.setTasks(initialTasks);
    // Act
    deleteTask(id);
    // Assert
    const updatedTasks = tasksObj.getTasks();
    expect(updatedTasks.length).toBe(2);
    expect(updatedTasks[0].id).toBe(1);
    expect(updatedTasks[1].id).toBe(2);
  });

  test('should not delete any task from the tasks array when given an invalid id', () => {
    // Arrange
    const id = 4;
    const initialTasks = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' },
    ];
    tasksObj.setTasks(initialTasks);
    // Act
    deleteTask(id);
    // Assert
    const updatedTasks = tasksObj.getTasks();
    expect(updatedTasks.length).toBe(3);
  });
});

describe('editTask', () => {
  test('test_edit_task_with_valid_id_and_description', () => {
    // Arrange
    const initialTasks = [
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: true },
      { id: 3, description: 'Task 3', completed: false },
    ];
    tasksObj.setTasks(initialTasks);
    const newDescription = 'New Task Description';
    // Act
    editTask(2, newDescription);
    const updatedTasks = tasksObj.getTasks();
    const updatedTask = updatedTasks.find((task) => task.id === 2);
    // Assert
    expect(updatedTask.description).toBe(newDescription);
  });
  test('test_edit_task_with_invalid_id', () => {
    // Arrange
    const initialTasks = [
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: true },
      { id: 3, description: 'Task 3', completed: false },
    ];
    tasksObj.setTasks(initialTasks);
    const newDescription = 'New Task Description';
    // Act
    editTask(4, newDescription);
    const updatedTasks = tasksObj.getTasks();
    // Assert
    expect(updatedTasks).toEqual(initialTasks);
  });
});

describe('clear completed Tasks', () => {
  test('test_clear_tasks_with_incomplete_tasks', () => {
    // Arrange
    const incompleteTasks = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: true },
      { id: 3, task: 'Task 3', completed: false },
    ];
    tasksObj.setTasks(incompleteTasks);
    // Act
    filterTasks();
    // Assert
    const filteredTasks = tasksObj.getTasks();
    expect(filteredTasks.length).toBe(2);
    expect(filteredTasks[0].id).toBe(1);
    expect(filteredTasks[1].id).toBe(2);
  });
});
