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
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
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
  filteredTasks.forEach((task, index) => {
    task.id = index + 1;
  });
  tasks = filteredTasks;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(filteredTasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  updateTasks();
};

function renderTasks() {
  const tasksContainer = document.getElementById('tasks-container');
  const tasks = updateTasks();
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
      editTask(idx + 1, input.value);
    });

    checkbox.addEventListener('change', () => {
      toggleCompleted(idx + 1);
      renderTasks();
    });

    dotsButton.addEventListener('click', () => {
      deleteTask(idx + 1);
      renderTasks();
    });
  });
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



const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.filterTasks)();
  (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
});

const inputList = document.getElementById('input-list');
const form = document.getElementById('form-input');

form.addEventListener('submit', () => {
  const description = inputList.value;
  if (description !== '') {
    (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(description);
    inputList.value = '';
    (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
  }
});

(0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDOztBQUVsQyxZQUFZLDBEQUFpQjs7QUFFN0I7QUFDQSxFQUFFLDBEQUFpQjtBQUNuQixVQUFVLDBEQUFpQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0EsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLDBEQUFpQjtBQUNuQixVQUFVLDBEQUFpQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBVUU7Ozs7Ozs7Ozs7Ozs7OztBQ3hIRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDNUJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUM0Qzs7QUFFakU7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixFQUFFLHdEQUFXO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQU87QUFDWDtBQUNBLElBQUksd0RBQVc7QUFDZjtBQUNBLENBQUM7O0FBRUQsd0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHRhc2tzT2JqIGZyb20gJy4vdGFza3MuanMnO1xuXG5sZXQgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuXG5jb25zdCB1cGRhdGVUYXNrcyA9ICgpID0+IHtcbiAgdGFza3NPYmouc2V0VGFza3ModGFza3MpO1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGlkOiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gIHVwZGF0ZVRhc2tzKCk7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaWQgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gICAgdXBkYXRlVGFza3MoKTtcbiAgfVxufTtcblxuY29uc3QgZWRpdFRhc2sgPSAoaWQsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2spIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdXBkYXRlVGFza3MoKTtcbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKGlkKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIHVwZGF0ZVRhc2tzKCk7XG59O1xuXG5jb25zdCBmaWx0ZXJUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgZmlsdGVyZWRUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIHRhc2suaWQgPSBpbmRleCArIDE7XG4gIH0pO1xuICB0YXNrcyA9IGZpbHRlcmVkVGFza3M7XG4gIHRhc2tzT2JqLnNldFRhc2tzKGZpbHRlcmVkVGFza3MpO1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIHVwZGF0ZVRhc2tzKCk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tzID0gdXBkYXRlVGFza3MoKTtcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGlkeCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRvdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdhbHQnLCAnQ2hlY2shJyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjU1Jyk7XG4gICAgaW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdGl0bGU6ICdjbGljayBhbmQgc29zdGFpbiBmb3IgcmVhcnJhbmdlJyxcbiAgICAgIGNsYXNzOiAnaW5wdXQtYnRuLWRvdHMnLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBkb3RzQnV0dG9uLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZG90c0J1dHRvbik7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGVkaXRUYXNrKGlkeCArIDEsIGlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZChpZHggKyAxKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfSk7XG5cbiAgICBkb3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVsZXRlVGFzayhpZHggKyAxKTtcbiAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICB1cGRhdGVUYXNrcyxcbiAgYWRkVGFzayxcbiAgZGVsZXRlVGFzayxcbiAgZWRpdFRhc2ssXG4gIHRvZ2dsZUNvbXBsZXRlZCxcbiAgZmlsdGVyVGFza3MsXG4gIHJlbmRlclRhc2tzLFxufTtcbiIsImxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpID8/IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnd2FzaCB0aGUgZGlzaGVzJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZGVzY3JpcHRpb246ICdDb21wbGV0ZSB0aGUgdG8tZG8gbGlzdCBwcm9qZWN0JyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZGVzY3JpcHRpb246ICd0YWtlIGEgcmVzdCcsXG4gICAgY29tcGxldGVkOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3QgdGFza3NPYmogPSB7XG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrcztcbiAgfSxcbiAgc2V0VGFza3MobmV3VGFza3MpIHtcbiAgICB0YXNrcyA9IG5ld1Rhc2tzO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrc09iajsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgYWRkVGFzaywgZmlsdGVyVGFza3MsIHJlbmRlclRhc2tzIH0gZnJvbSAnLi9tZXRob2RzLmpzJztcblxuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYnRuJyk7XG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZmlsdGVyVGFza3MoKTtcbiAgcmVuZGVyVGFza3MoKTtcbn0pO1xuXG5jb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbGlzdCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWlucHV0Jyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0TGlzdC52YWx1ZTtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSAnJykge1xuICAgIGFkZFRhc2soZGVzY3JpcHRpb24pO1xuICAgIGlucHV0TGlzdC52YWx1ZSA9ICcnO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gIH1cbn0pO1xuXG5yZW5kZXJUYXNrcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9