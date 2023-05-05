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

document.getElementById('clear-btn').addEventListener('click', () => {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  filteredTasks.forEach((task, index) => {
    task.id = index + 1;
  });
  tasks = filteredTasks;
  _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].setTasks(filteredTasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrQzs7QUFFbEMsWUFBWSwwREFBaUI7O0FBRTdCO0FBQ0EsRUFBRSwwREFBaUI7QUFDbkIsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7QUNuREY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQzVCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBT0M7QUFDWTs7QUFFbEMsWUFBWSx3REFBVzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU0scURBQVE7QUFDZCxLQUFLOztBQUVMO0FBQ0EsTUFBTSw0REFBZTtBQUNyQjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLHVEQUFVO0FBQ2hCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHRhc2tzT2JqIGZyb20gJy4vdGFza3MuanMnO1xuXG5sZXQgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrcygpIHtcbiAgdGFza3NPYmouc2V0VGFza3ModGFza3MpO1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIHJldHVybiB0YXNrcztcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhkZXNjcmlwdGlvbikge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHRhc2tzLmxlbmd0aCArIDEsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfTtcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgdXBkYXRlVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmlkID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soaWQsIGRlc2NyaXB0aW9uKSB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2spIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdXBkYXRlVGFza3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQoaWQpIHtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICBjb25zdCB0YXNrID0gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgdXBkYXRlVGFza3MoKTtcbn1cblxuZXhwb3J0IHtcbiAgdXBkYXRlVGFza3MsIGFkZFRhc2ssIGRlbGV0ZVRhc2ssIGVkaXRUYXNrLCB0b2dnbGVDb21wbGV0ZWQsXG59O1xuIiwibGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgPz8gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZGVzY3JpcHRpb246ICd3YXNoIHRoZSBkaXNoZXMnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBkZXNjcmlwdGlvbjogJ0NvbXBsZXRlIHRoZSB0by1kbyBsaXN0IHByb2plY3QnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBkZXNjcmlwdGlvbjogJ3Rha2UgYSByZXN0JyxcbiAgICBjb21wbGV0ZWQ6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCB0YXNrc09iaiA9IHtcbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9LFxuICBzZXRUYXNrcyhuZXdUYXNrcykge1xuICAgIHRhc2tzID0gbmV3VGFza3M7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzT2JqOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQge1xuICBhZGRUYXNrLFxuICBkZWxldGVUYXNrLFxuICBlZGl0VGFzayxcbiAgdXBkYXRlVGFza3MsXG4gIHRvZ2dsZUNvbXBsZXRlZCxcbn0gZnJvbSAnLi9tZXRob2RzLmpzJztcbmltcG9ydCB0YXNrc09iaiBmcm9tICcuL3Rhc2tzLmpzJztcblxubGV0IHRhc2tzID0gdXBkYXRlVGFza3MoKTtcblxuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtY29udGFpbmVyJyk7XG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGlkeCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRvdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdhbHQnLCAnQ2hlY2shJyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjU1Jyk7XG4gICAgdGV4dGFyZWEudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdGl0bGU6ICdjbGljayBhbmQgc29zdGFpbiBmb3IgcmVhcnJhbmdlJyxcbiAgICAgIGNsYXNzOiAnaW5wdXQtYnRuLWRvdHMnLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBkb3RzQnV0dG9uLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZG90c0J1dHRvbik7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGVkaXRUYXNrKGlkeCArIDEsIHRleHRhcmVhLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZChpZHggKyAxKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfSk7XG5cbiAgICBkb3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVsZXRlVGFzayhpZHggKyAxKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGZpbHRlcmVkVGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICB0YXNrLmlkID0gaW5kZXggKyAxO1xuICB9KTtcbiAgdGFza3MgPSBmaWx0ZXJlZFRhc2tzO1xuICB0YXNrc09iai5zZXRUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICByZW5kZXJUYXNrcygpO1xufSk7XG5cbmNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1saXN0Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0taW5wdXQnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0TGlzdC52YWx1ZTtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSAnJykge1xuICAgIGFkZFRhc2soZGVzY3JpcHRpb24pO1xuICAgIGlucHV0TGlzdC52YWx1ZSA9ICcnO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gIH1cbn0pO1xuXG5yZW5kZXJUYXNrcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9