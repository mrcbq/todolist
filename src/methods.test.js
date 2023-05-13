// import 'jest-localstorage-mock';
import { addTask, deleteTask } from './methods.js';
import tasksObj from './tasks.js';

describe('addTask()', () => {
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

describe('deleteTask()', () => {
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
