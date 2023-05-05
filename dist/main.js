/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "saveTasks": () => (/* binding */ saveTasks),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
const tasks = JSON.parse(localStorage.getItem('tasks')) || [
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

function saveTasks() {
  const tasksTemp = tasks;
  tasks.length = 0;
  tasks.push(...tasksTemp);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(description) {
  const newTask = {
    id: tasks.length,
    description,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks();
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index;
    });
    saveTasks();
  }
}

function editTask(id, description) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    saveTasks();
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



const tasksContainer = document.getElementById('tasks-container');

function renderTasks() {
  _task_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const textarea = document.createElement('input');
    const dotsButton = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('tabindex', '0');
    checkbox.setAttribute('alt', 'Check!');

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
      (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(listItem.dataset.index, textarea.value);
    });
  });
}

document.getElementById('clear-btn').addEventListener('click', () => {
  _task_js__WEBPACK_IMPORTED_MODULE_1__.tasks = _task_js__WEBPACK_IMPORTED_MODULE_1__.tasks.filter((task) => !task.completed);
  renderTasks();
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.querySelector('input[type="text"]');
  const description = input.value.trim();
  if (description !== '') {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(description);
    input.value = '';
  }
});

tasksContainer.addEventListener('click', (event) => {
  const { target } = event;
  const listItem = target.closest('li');
  const { index } = listItem.dataset;
  if (target.matches('input[type="checkbox"]')) {
    _task_js__WEBPACK_IMPORTED_MODULE_1__.tasks[index].completed = target.checked;
  } else if (target.matches('.input-btn-dots')) {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(index);
  }
});

renderTasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUU7Ozs7Ozs7VUN4REY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFHRjs7QUFFbkI7O0FBRUE7QUFDQSxFQUFFLG1EQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLDJDQUFLLEdBQUcsa0RBQVk7QUFDdEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQSxVQUFVLFFBQVE7QUFDbEI7QUFDQSxJQUFJLDJDQUFLO0FBQ1QsSUFBSTtBQUNKLElBQUksb0RBQVU7QUFDZDtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBkZXNjcmlwdGlvbjogJ3dhc2ggdGhlIGRpc2hlcycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tcGxldGUgdGhlIHRvLWRvIGxpc3QgcHJvamVjdCcsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAndGFrZSBhIHJlc3QnLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIHNhdmVUYXNrcygpIHtcbiAgY29uc3QgdGFza3NUZW1wID0gdGFza3M7XG4gIHRhc2tzLmxlbmd0aCA9IDA7XG4gIHRhc2tzLnB1c2goLi4udGFza3NUZW1wKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhkZXNjcmlwdGlvbikge1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGlkOiB0YXNrcy5sZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfTtcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgc2F2ZVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaWQpIHtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaWQgPSBpbmRleDtcbiAgICB9KTtcbiAgICBzYXZlVGFza3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhpZCwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2spIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgc2F2ZVRhc2tzKCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgdGFza3MsIHNhdmVUYXNrcywgYWRkVGFzaywgZGVsZXRlVGFzaywgZWRpdFRhc2ssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7XG4gIHRhc2tzLCBhZGRUYXNrLCBkZWxldGVUYXNrLCBlZGl0VGFzaywgc2F2ZVRhc2tzLFxufSBmcm9tICcuL3Rhc2suanMnO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1jb250YWluZXInKTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkb3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NoZWNrIScpO1xuXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjU1Jyk7XG4gICAgdGV4dGFyZWEudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdGl0bGU6ICdjbGljayBhbmQgc29zdGFpbiBmb3IgcmVhcnJhbmdlJyxcbiAgICAgIGNsYXNzOiAnaW5wdXQtYnRuLWRvdHMnLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBkb3RzQnV0dG9uLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZG90c0J1dHRvbik7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGVkaXRUYXNrKGxpc3RJdGVtLmRhdGFzZXQuaW5kZXgsIHRleHRhcmVhLnZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gIHJlbmRlclRhc2tzKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSAnJykge1xuICAgIGFkZFRhc2soZGVzY3JpcHRpb24pO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IGxpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gIGNvbnN0IHsgaW5kZXggfSA9IGxpc3RJdGVtLmRhdGFzZXQ7XG4gIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpIHtcbiAgICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gdGFyZ2V0LmNoZWNrZWQ7XG4gIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5pbnB1dC1idG4tZG90cycpKSB7XG4gICAgZGVsZXRlVGFzayhpbmRleCk7XG4gIH1cbn0pO1xuXG5yZW5kZXJUYXNrcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9