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
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks),
/* harmony export */   "toggleCompleted": () => (/* binding */ toggleCompleted),
/* harmony export */   "updateTasks": () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");


let tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

const updateTasks = () => {
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(tasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  return tasks;
};

const addTask = (description) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };
  tasks.push(newTask);
  updateTasks();
};

const deleteTask = (id) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    updateTasks();
  }
};

const editTask = (id, description) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    updateTasks();
  }
};

const toggleCompleted = (id) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  updateTasks();
};

const filterTasks = () => {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  filteredTasks.forEach((task, index) => { task.id = index + 1; });
  tasks = filteredTasks;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(filteredTasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  updateTasks();
};




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



const tasksContainer = document.getElementById('tasks-container');
function renderTasks() {
  const tasks = (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();
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
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(idx + 1, input.value);
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

document.getElementById('clear-btn').addEventListener('click', () => {
  (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.filterTasks)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7O0FBRWxDLFlBQVksMERBQWlCOztBQUU3QjtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7OztBQzVERjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDNUJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQVFDOztBQUV0QjtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU0scURBQVE7QUFDZCxLQUFLOztBQUVMO0FBQ0EsTUFBTSw0REFBZTtBQUNyQjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLHVEQUFVO0FBQ2hCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsd0RBQVc7QUFDYjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguY3NzP2M0MGQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB0YXNrc09iaiBmcm9tICcuL3Rhc2tzLmpzJztcblxubGV0IHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcblxuY29uc3QgdXBkYXRlVGFza3MgPSAoKSA9PiB7XG4gIHRhc2tzT2JqLnNldFRhc2tzKHRhc2tzKTtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICByZXR1cm4gdGFza3M7XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgbmV3VGFzayA9IHtcbiAgICBpZDogdGFza3MubGVuZ3RoICsgMSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xuICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB1cGRhdGVUYXNrcygpO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmlkID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tzKCk7XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRUYXNrID0gKGlkLCBkZXNjcmlwdGlvbikgPT4ge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIGlmICh0YXNrKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHVwZGF0ZVRhc2tzKCk7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IChpZCkgPT4ge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICB1cGRhdGVUYXNrcygpO1xufTtcblxuY29uc3QgZmlsdGVyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGZpbHRlcmVkVGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHsgdGFzay5pZCA9IGluZGV4ICsgMTsgfSk7XG4gIHRhc2tzID0gZmlsdGVyZWRUYXNrcztcbiAgdGFza3NPYmouc2V0VGFza3MoZmlsdGVyZWRUYXNrcyk7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgdXBkYXRlVGFza3MoKTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZVRhc2tzLCBhZGRUYXNrLCBkZWxldGVUYXNrLCBlZGl0VGFzaywgdG9nZ2xlQ29tcGxldGVkLCBmaWx0ZXJUYXNrcyxcbn07XG4iLCJsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSA/PyBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBkZXNjcmlwdGlvbjogJ3dhc2ggdGhlIGRpc2hlcycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tcGxldGUgdGhlIHRvLWRvIGxpc3QgcHJvamVjdCcsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGRlc2NyaXB0aW9uOiAndGFrZSBhIHJlc3QnLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmNvbnN0IHRhc2tzT2JqID0ge1xuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH0sXG4gIHNldFRhc2tzKG5ld1Rhc2tzKSB7XG4gICAgdGFza3MgPSBuZXdUYXNrcztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza3NPYmo7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7XG4gIGFkZFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG4gIGVkaXRUYXNrLFxuICB1cGRhdGVUYXNrcyxcbiAgdG9nZ2xlQ29tcGxldGVkLFxuICBmaWx0ZXJUYXNrcyxcbn0gZnJvbSAnLi9tZXRob2RzLmpzJztcblxuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtY29udGFpbmVyJyk7XG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSB1cGRhdGVUYXNrcygpO1xuICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaWR4KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZG90c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdDaGVjayEnKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyNTUnKTtcbiAgICBpbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgdGFiaW5kZXg6ICctMScsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB0aXRsZTogJ2NsaWNrIGFuZCBzb3N0YWluIGZvciByZWFycmFuZ2UnLFxuICAgICAgY2xhc3M6ICdpbnB1dC1idG4tZG90cycsXG4gICAgfTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGRvdHNCdXR0b24uc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkb3RzQnV0dG9uKTtcblxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZWRpdFRhc2soaWR4ICsgMSwgaW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkKGlkeCArIDEpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGRvdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkZWxldGVUYXNrKGlkeCArIDEpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZmlsdGVyVGFza3MoKTtcbiAgcmVuZGVyVGFza3MoKTtcbn0pO1xuXG5jb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbGlzdCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWlucHV0Jyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dExpc3QudmFsdWU7XG4gIGlmIChkZXNjcmlwdGlvbiAhPT0gJycpIHtcbiAgICBhZGRUYXNrKGRlc2NyaXB0aW9uKTtcbiAgICBpbnB1dExpc3QudmFsdWUgPSAnJztcbiAgICByZW5kZXJUYXNrcygpO1xuICB9XG59KTtcblxucmVuZGVyVGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==