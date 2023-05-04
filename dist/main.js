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

  // textarea.addEventListener('click', () => {
  //   dotsButton.classList.add('active');
  // });

  // document.addEventListener('click', (event) => {
  //   if (!textarea.contains(event.target)) {
  //     dotsButton.classList.remove('active');
  //     console.log(textarea, event.target);
  //   }
  // });

  listItem.appendChild(checkbox);
  listItem.appendChild(textarea);
  listItem.appendChild(dotsButton);

  tasksContainer.appendChild(listItem);
});

// crea funciones para anadir, eliminar y editar elementos de la lista de tareas

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBkZXNjcmlwdGlvbjogJ3dhc2ggdGhlIGRpc2hlcycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tcGxldGUgdGhlIHRvLWRvIGxpc3QgcHJvamVjdCcsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAndGFrZSBhIHJlc3QnLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xuXG50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGRvdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdhbHQnLCAnQ2hlY2shJyk7XG5cbiAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjU1Jyk7XG4gIHRleHRhcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICBkb3RzQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgZG90c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIGRvdHNCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgZG90c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2NsaWNrIGFuZCBzb3N0YWluIGZvciByZWFycmFuZ2UnKTtcbiAgZG90c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1idG4tZG90cycpO1xuXG4gIC8vIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIGRvdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIC8vIH0pO1xuXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIC8vICAgaWYgKCF0ZXh0YXJlYS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gIC8vICAgICBkb3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAvLyAgICAgY29uc29sZS5sb2codGV4dGFyZWEsIGV2ZW50LnRhcmdldCk7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZG90c0J1dHRvbik7XG5cbiAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufSk7XG5cbi8vIGNyZWEgZnVuY2lvbmVzIHBhcmEgYW5hZGlyLCBlbGltaW5hciB5IGVkaXRhciBlbGVtZW50b3MgZGUgbGEgbGlzdGEgZGUgdGFyZWFzXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=