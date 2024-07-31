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

/***/ "./src/handlers/enviar_cadastro.js":
/*!*****************************************!*\
  !*** ./src/handlers/enviar_cadastro.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btn_validar: () => (/* binding */ btn_validar)\n/* harmony export */ });\n/* harmony import */ var _validar_cadastro_campos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validar_cadastro_campos.js */ \"./src/handlers/validar_cadastro_campos.js\");\n\r\n\r\nlet usuario_cadastro_db = document.querySelector(\"#usuario-cadastro\")\r\nlet senha_cadastro_db = document.querySelector(\"#senha-cadastro\")\r\nlet senha_cadastro_confirmar_db = document.querySelector(\"#confirma-senha-cadastro\")\r\nlet email_cadastro_db = document.querySelector(\"#email-cadastro\")\r\nlet btn_finalizar_cadastro = document.querySelector(\"#finalizar-cadastro\")\r\n\r\nlet btn_validar = function(){\r\n    btn_finalizar_cadastro.addEventListener('click', async (e) => {\r\n        e.preventDefault()\r\n\r\n        if((0,_validar_cadastro_campos_js__WEBPACK_IMPORTED_MODULE_0__.validar_form)()) {\r\n\r\n            let post_data = {\r\n                title: \"foo\",\r\n                body: \"bar\",\r\n                userId: 2\r\n              }\r\n\r\n            try {\r\n                const response = await fetch('http://localhost:3000/usuarios/', {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                    body: JSON.stringify(post_data)\r\n                })\r\n\r\n                const result = await response.json()\r\n                console.log('Sucesso:', result)\r\n            } catch (error) {\r\n                console.error('Erro:', error);\r\n            }\r\n            \r\n        } else {\r\n            alert('errou')\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/enviar_cadastro.js?");

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

/***/ "./src/handlers/validar_cadastro_campos.js":
/*!*************************************************!*\
  !*** ./src/handlers/validar_cadastro_campos.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validar_form: () => (/* binding */ validar_form)\n/* harmony export */ });\nlet usuario_cadastro = document.querySelector(\"#usuario-cadastro\")\r\nlet senha_cadastro = document.querySelector(\"#senha-cadastro\")\r\nlet senha_cadastro_confirmar = document.querySelector(\"#confirma-senha-cadastro\")\r\nlet email_cadastro = document.querySelector(\"#email-cadastro\")\r\n\r\nlet validar_form = function(){\r\n\r\n    if (\r\n            usuario_cadastro.value !== \"\" &&\r\n            senha_cadastro.value !== \"\" &&\r\n            senha_cadastro_confirmar.value !== \"\" &&\r\n            email_cadastro.value !== \"\"\r\n        ) {\r\n            return true\r\n    } else {\r\n        return false\r\n    }\r\n}\r\n\r\n/*let btn_validar = function(){\r\n    btn_finalizar_cadastro.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n    \r\n        if(validar_form()) {\r\n            \r\n        } else {\r\n    \r\n            alert('deu errado')\r\n        }\r\n    })\r\n}*/\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/validar_cadastro_campos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/main.sass */ \"./src/styles/main.sass\");\n/* harmony import */ var _handlers_redirecionar_registro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/redirecionar_registro.js */ \"./src/handlers/redirecionar_registro.js\");\n/* harmony import */ var _handlers_redirecionar_login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/redirecionar_login.js */ \"./src/handlers/redirecionar_login.js\");\n/* harmony import */ var _handlers_enviar_cadastro_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/enviar_cadastro.js */ \"./src/handlers/enviar_cadastro.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Redireciona usuário para tela de cadastro\r\n(0,_handlers_redirecionar_registro_js__WEBPACK_IMPORTED_MODULE_1__.redirecionar_cadastro)()\r\n//Redireciona usuário para tela de login\r\n;(0,_handlers_redirecionar_login_js__WEBPACK_IMPORTED_MODULE_2__.redirecionar_login)()\r\n//POST\r\n;(0,_handlers_enviar_cadastro_js__WEBPACK_IMPORTED_MODULE_3__.btn_validar)()\n\n//# sourceURL=webpack://estoque-book/./src/index.js?");

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