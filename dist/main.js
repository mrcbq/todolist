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

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "toggleCompleted": () => (/* binding */ toggleCompleted),
/* harmony export */   "updateTasks": () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");


let tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

function updateTasks() {
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(tasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  return tasks;
}

function addTask(description) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };
  tasks.push(newTask);
  updateTasks();
}

function deleteTask(id) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    updateTasks();
  }
}

function editTask(id, description) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    updateTasks();
  }
}

function toggleCompleted(id) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  updateTasks();
}




/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [
  {
    id: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    id: 2,
    description: 'Complete the to-do list project',
    completed: false,
  },
  {
    id: 3,
    description: 'take a rest',
    completed: true,
  },
];

const tasksObj = {
  getTasks() {
    return tasks;
  },
  setTasks(newTasks) {
    tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksObj);

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
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods.js */ "./src/methods.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");




let tasks = (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();

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
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(idx + 1, textarea.value);
    });

    checkbox.addEventListener('change', () => {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.toggleCompleted)(idx + 1);
      renderTasks();
    });

    dotsButton.addEventListener('click', () => {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(idx + 1);
      renderTasks();
    });
  });
}

const filterTasks = () => {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  filteredTasks.forEach((task, index) => {
    task.id = index + 1;
  });
  tasks = filteredTasks;
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].setTasks(filteredTasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
};

document.getElementById('clear-btn').addEventListener('click', () => {
  filterTasks();
  renderTasks();
});

const inputList = document.getElementById('input-list');
const form = document.getElementById('form-input');
form.addEventListener('submit', () => {
  const description = inputList.value;
  if (description !== '') {
    (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(description);
    inputList.value = '';
    renderTasks();
  }
});

renderTasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrQzs7QUFFbEMsWUFBWSwwREFBaUI7O0FBRTdCO0FBQ0EsRUFBRSwwREFBaUI7QUFDbkIsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7QUNuREY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQzVCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBT0M7QUFDWTs7QUFFbEMsWUFBWSx3REFBVzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU0scURBQVE7QUFDZCxLQUFLOztBQUVMO0FBQ0EsTUFBTSw0REFBZTtBQUNyQjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLHVEQUFVO0FBQ2hCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguY3NzP2M0MGQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB0YXNrc09iaiBmcm9tICcuL3Rhc2tzLmpzJztcblxubGV0IHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcblxuZnVuY3Rpb24gdXBkYXRlVGFza3MoKSB7XG4gIHRhc2tzT2JqLnNldFRhc2tzKHRhc2tzKTtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICByZXR1cm4gdGFza3M7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soZGVzY3JpcHRpb24pIHtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGlkOiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gIHVwZGF0ZVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaWQpIHtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pZCA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgICB1cGRhdGVUYXNrcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGlkLCBkZXNjcmlwdGlvbikge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIGlmICh0YXNrKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHVwZGF0ZVRhc2tzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKGlkKSB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIHVwZGF0ZVRhc2tzKCk7XG59XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZVRhc2tzLCBhZGRUYXNrLCBkZWxldGVUYXNrLCBlZGl0VGFzaywgdG9nZ2xlQ29tcGxldGVkLFxufTtcbiIsImxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpID8/IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnd2FzaCB0aGUgZGlzaGVzJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZGVzY3JpcHRpb246ICdDb21wbGV0ZSB0aGUgdG8tZG8gbGlzdCBwcm9qZWN0JyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZGVzY3JpcHRpb246ICd0YWtlIGEgcmVzdCcsXG4gICAgY29tcGxldGVkOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3QgdGFza3NPYmogPSB7XG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrcztcbiAgfSxcbiAgc2V0VGFza3MobmV3VGFza3MpIHtcbiAgICB0YXNrcyA9IG5ld1Rhc2tzO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrc09iajsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHtcbiAgYWRkVGFzayxcbiAgZGVsZXRlVGFzayxcbiAgZWRpdFRhc2ssXG4gIHVwZGF0ZVRhc2tzLFxuICB0b2dnbGVDb21wbGV0ZWQsXG59IGZyb20gJy4vbWV0aG9kcy5qcyc7XG5pbXBvcnQgdGFza3NPYmogZnJvbSAnLi90YXNrcy5qcyc7XG5cbmxldCB0YXNrcyA9IHVwZGF0ZVRhc2tzKCk7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZHgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkb3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NoZWNrIScpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcblxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1NScpO1xuICAgIHRleHRhcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICB0YWJpbmRleDogJy0xJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHRpdGxlOiAnY2xpY2sgYW5kIHNvc3RhaW4gZm9yIHJlYXJyYW5nZScsXG4gICAgICBjbGFzczogJ2lucHV0LWJ0bi1kb3RzJyxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZG90c0J1dHRvbi5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRvdHNCdXR0b24pO1xuXG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBlZGl0VGFzayhpZHggKyAxLCB0ZXh0YXJlYS52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0b2dnbGVDb21wbGV0ZWQoaWR4ICsgMSk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgZG90c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2soaWR4ICsgMSk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgZmlsdGVyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGZpbHRlcmVkVGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICB0YXNrLmlkID0gaW5kZXggKyAxO1xuICB9KTtcbiAgdGFza3MgPSBmaWx0ZXJlZFRhc2tzO1xuICB0YXNrc09iai5zZXRUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmaWx0ZXJUYXNrcygpO1xuICByZW5kZXJUYXNrcygpO1xufSk7XG5cbmNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1saXN0Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0taW5wdXQnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0TGlzdC52YWx1ZTtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSAnJykge1xuICAgIGFkZFRhc2soZGVzY3JpcHRpb24pO1xuICAgIGlucHV0TGlzdC52YWx1ZSA9ICcnO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gIH1cbn0pO1xuXG5yZW5kZXJUYXNrcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9