/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.sass":
/*!******************************!*\
  !*** ./src/styles/main.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://estoque-book/./src/styles/main.sass?");

/***/ }),

/***/ "./src/handlers/redirecionar_login.js":
/*!********************************************!*\
  !*** ./src/handlers/redirecionar_login.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   redirecionar_login: () => (/* binding */ redirecionar_login)\n/* harmony export */ });\nlet btn_redirecionar_login = document.querySelector('#redirecionar-p-login')\r\nlet get_form_login = document.querySelector('.get-form-login')\r\nlet get_form_cadastro = document.querySelector('.get-form-cadastro')\r\nlet get_subtitulo = document.querySelector('.subtitulo')\r\n\r\n\r\nlet redirecionar_login = function(){\r\n    btn_redirecionar_login.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        get_form_cadastro.classList.add('hide')\r\n        get_subtitulo.classList.add('hide')\r\n        get_form_login.classList.remove('hide')\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/redirecionar_login.js?");

/***/ }),

/***/ "./src/handlers/redirecionar_registro.js":
/*!***********************************************!*\
  !*** ./src/handlers/redirecionar_registro.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   redirecionar_cadastro: () => (/* binding */ redirecionar_cadastro)\n/* harmony export */ });\nlet btn_redirecionar_cadastro = document.querySelector('#redirecionar-p-cadastro')\r\nlet get_form_login = document.querySelector('.get-form-login')\r\nlet get_form_cadastro = document.querySelector('.get-form-cadastro')\r\nlet get_subtitulo = document.querySelector('.subtitulo')\r\n\r\n\r\nlet redirecionar_cadastro = function(){\r\n    btn_redirecionar_cadastro.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        get_form_login.classList.add('hide')\r\n        get_form_cadastro.classList.remove('hide')\r\n        get_subtitulo.classList.remove('hide')\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/redirecionar_registro.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/main.sass */ \"./src/styles/main.sass\");\n/* harmony import */ var _handlers_redirecionar_registro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/redirecionar_registro.js */ \"./src/handlers/redirecionar_registro.js\");\n/* harmony import */ var _handlers_redirecionar_login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/redirecionar_login.js */ \"./src/handlers/redirecionar_login.js\");\n\r\n\r\n\r\n\r\n//Redireciona usuário para tela de cadastro\r\n(0,_handlers_redirecionar_registro_js__WEBPACK_IMPORTED_MODULE_1__.redirecionar_cadastro)()\r\n//Redireciona usuário para tela de login\r\n;(0,_handlers_redirecionar_login_js__WEBPACK_IMPORTED_MODULE_2__.redirecionar_login)()\n\n//# sourceURL=webpack://estoque-book/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;