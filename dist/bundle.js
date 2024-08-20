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

/***/ "./src/handlers/entrar_sistema.js":
/*!****************************************!*\
  !*** ./src/handlers/entrar_sistema.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   entrar_sistema: () => (/* binding */ entrar_sistema)\n/* harmony export */ });\n/* harmony import */ var _lembrar_usuario_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lembrar_usuario.js */ \"./src/handlers/lembrar_usuario.js\");\n\r\n\r\nlet entrar_sistema = function(){\r\n\r\n    let btn_entrar_sistema = document.querySelector(\"#entrar-sistema\")\r\n    btn_entrar_sistema.addEventListener(\"click\", (e) => {\r\n        e.preventDefault()\r\n        ;(0,_lembrar_usuario_js__WEBPACK_IMPORTED_MODULE_0__.lembrar_usuario)()\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/entrar_sistema.js?");

/***/ }),

/***/ "./src/handlers/enviar_cadastro.js":
/*!*****************************************!*\
  !*** ./src/handlers/enviar_cadastro.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btn_validar: () => (/* binding */ btn_validar)\n/* harmony export */ });\n/* harmony import */ var _validar_cadastro_campos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validar_cadastro_campos.js */ \"./src/handlers/validar_cadastro_campos.js\");\n/* harmony import */ var _limpar_cadastro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./limpar_cadastro.js */ \"./src/handlers/limpar_cadastro.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/handlers/modal.js\");\n\r\n\r\n\r\n\r\nlet btn_finalizar_cadastro = document.querySelector(\"#finalizar-cadastro\")\r\n\r\nlet btn_validar = function(){\r\n    btn_finalizar_cadastro.addEventListener('click', async (e) => {\r\n        let usuario_cadastro_db = document.querySelector(\"#usuario-cadastro\").value\r\n        let senha_cadastro_db = document.querySelector(\"#senha-cadastro\").value\r\n        let senha_cadastro_confirmar_db = document.querySelector(\"#confirma-senha-cadastro\").value\r\n        let email_cadastro_db = document.querySelector(\"#email-cadastro\").value\r\n        e.preventDefault()\r\n\r\n        if((0,_validar_cadastro_campos_js__WEBPACK_IMPORTED_MODULE_0__.validar_form)()) {\r\n\r\n            let post_data = {\r\n                nome: usuario_cadastro_db,\r\n                email: email_cadastro_db,\r\n                password: senha_cadastro_db\r\n            }\r\n\r\n            try {\r\n                const response = await fetch('http://localhost:3000/usuario', {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                    body: JSON.stringify(post_data)\r\n                })\r\n\r\n                const result = await response.json()\r\n                if(!result.error){\r\n                    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.gera_modal)(result.message)\r\n                } else {\r\n                    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.gera_modal)(result.error)\r\n                }\r\n                \r\n            } catch (error) {\r\n                (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.gera_modal)(error)\r\n                console.error('Erro:', error)\r\n            }\r\n\r\n            (0,_limpar_cadastro_js__WEBPACK_IMPORTED_MODULE_1__.limpar_form)()\r\n            \r\n        } else {\r\n            (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.gera_modal)('Por favor, preencha todos os campos corretamente.')\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/enviar_cadastro.js?");

/***/ }),

/***/ "./src/handlers/lembrar_usuario.js":
/*!*****************************************!*\
  !*** ./src/handlers/lembrar_usuario.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lembrar_usuario: () => (/* binding */ lembrar_usuario)\n/* harmony export */ });\n/* harmony import */ var _salvar_usuario_localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salvar_usuario_localstorage.js */ \"./src/handlers/salvar_usuario_localstorage.js\");\n\r\n\r\nlet lembrar_usuario = () => {\r\n    let lembrar_acesso = document.querySelector(\"#lembrar-acesso-input\")\r\n    if(lembrar_acesso.checked) {\r\n        (0,_salvar_usuario_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.salvar_usuario_localstorage)()\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/lembrar_usuario.js?");

/***/ }),

/***/ "./src/handlers/limpar_cadastro.js":
/*!*****************************************!*\
  !*** ./src/handlers/limpar_cadastro.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   limpar_form: () => (/* binding */ limpar_form)\n/* harmony export */ });\nlet limpar_form = function(){\r\n    let usuario_cadastro = document.querySelector(\"#usuario-cadastro\").value = \"\"\r\n    let senha_cadastro = document.querySelector(\"#senha-cadastro\").value = \"\"\r\n    let senha_cadastro_confirmar = document.querySelector(\"#confirma-senha-cadastro\").value = \"\"\r\n    let email_cadastro = document.querySelector(\"#email-cadastro\").value = \"\"\r\n}\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/limpar_cadastro.js?");

/***/ }),

/***/ "./src/handlers/modal.js":
/*!*******************************!*\
  !*** ./src/handlers/modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gera_modal: () => (/* binding */ gera_modal)\n/* harmony export */ });\nlet gera_modal = (msg) => {\r\n    let modal = document.querySelector(\"#area-login\")\r\n    let valida_modal = document.querySelector(\".modal-formato\")\r\n    \r\n    if(!valida_modal){\r\n        let div = document.createElement(\"div\")\r\n        div.classList.add(\"modal-formato\")\r\n        let p = document.createElement(\"p\")\r\n        let btn_close_modal = document.createElement(\"button\")\r\n        p.classList.add(\"modal-p\")\r\n        p.innerHTML = msg\r\n        div.appendChild(p)\r\n        div.appendChild(btn_close_modal)\r\n        btn_close_modal.classList.add(\"btn\", \"btn-modal\")\r\n        btn_close_modal.innerText = \"Fechar\"\r\n        modal.appendChild(div)\r\n        \r\n        btn_close_modal.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            div.remove()\r\n        })\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/modal.js?");

/***/ }),

/***/ "./src/handlers/recuperar_senha_api.js":
/*!*********************************************!*\
  !*** ./src/handlers/recuperar_senha_api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alterar_senha: () => (/* binding */ alterar_senha)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/handlers/modal.js\");\n/* harmony import */ var _retornar_id_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retornar_id_api.js */ \"./src/handlers/retornar_id_api.js\");\n/* harmony import */ var _retornar_senha_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retornar_senha_api.js */ \"./src/handlers/retornar_senha_api.js\");\n\r\n\r\n\r\n\r\n\r\nconst get_usuarios = async (usuario_atualizar, nova_senha) => {\r\n    try {\r\n        const url_api = `http://localhost:3000/usuario/${usuario_atualizar}`\r\n        const api = await fetch(url_api, {\r\n            method: 'PATCH',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({\r\n                password: nova_senha\r\n            })\r\n        })\r\n        if (api.ok) {\r\n            const dados = await api.json()\r\n            ;(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(dados.message)\r\n            return dados\r\n        } else {\r\n            const dados_error = await api.json()\r\n            ;(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(dados_error.error)\r\n        }\r\n    } catch (error) {\r\n        console.log(\"Erro na API:\", error)\r\n    }\r\n}\r\n\r\n\r\nconst alterar_senha = () => {\r\n    let btn_senha_atualizar = document.querySelector(\"#recuperar-cadastro\")\r\n    btn_senha_atualizar.addEventListener('click', async (e) => {\r\n        e.preventDefault()\r\n        const api_email = await (0,_retornar_id_api_js__WEBPACK_IMPORTED_MODULE_1__.get_email)()\r\n        const api_senha = await (0,_retornar_senha_api_js__WEBPACK_IMPORTED_MODULE_2__.get_senha)()\r\n        const api_retornada = await get_usuarios(api_email, api_senha)\r\n        \r\n    })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/recuperar_senha_api.js?");

/***/ }),

/***/ "./src/handlers/recuperar_senha_form.js":
/*!**********************************************!*\
  !*** ./src/handlers/recuperar_senha_form.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   recuperar_senha: () => (/* binding */ recuperar_senha)\n/* harmony export */ });\n\r\nlet recuperar_senha = function(){\r\n    let btn_recuperar_senha = document.querySelector('#recuperar-senha-form')\r\n    let get_form_login = document.querySelector('.get-form-login')\r\n    let get_form_cadastro = document.querySelector('.get-form-cadastro')\r\n    let get_form_recuperar = document.querySelector('.get-form-recuperar')\r\n    let get_subtitulo = document.querySelector('.subtitulo')\r\n    btn_recuperar_senha.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        get_form_cadastro.classList.add('hide')\r\n        get_subtitulo.classList.add('hide')\r\n        get_form_recuperar.classList.remove('hide')\r\n        get_subtitulo.classList.remove('hide')\r\n        get_form_login.classList.add('hide')\r\n        get_subtitulo.innerHTML = \"Preecha os dados para atualizar senha\"\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/recuperar_senha_form.js?");

/***/ }),

/***/ "./src/handlers/redirecionar_login.js":
/*!********************************************!*\
  !*** ./src/handlers/redirecionar_login.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   redirecionar_login: () => (/* binding */ redirecionar_login)\n/* harmony export */ });\n\r\nlet redirecionar_login = function(){\r\n    let btn_redirecionar_login = document.querySelectorAll('.btn-voltar')\r\n    let get_form_login = document.querySelector('.get-form-login')\r\n    let get_form_cadastro = document.querySelector('.get-form-cadastro')\r\n    let get_form_recuperar = document.querySelector('.get-form-recuperar')\r\n    let get_subtitulo = document.querySelector('.subtitulo')\r\n\r\n    btn_redirecionar_login.forEach(element => {\r\n        element.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            get_form_cadastro.classList.add('hide')\r\n            get_subtitulo.classList.add('hide')\r\n            get_form_recuperar.classList.add('hide')\r\n            get_form_login.classList.remove('hide')\r\n        })\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/redirecionar_login.js?");

/***/ }),

/***/ "./src/handlers/redirecionar_registro.js":
/*!***********************************************!*\
  !*** ./src/handlers/redirecionar_registro.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   redirecionar_cadastro: () => (/* binding */ redirecionar_cadastro)\n/* harmony export */ });\nlet redirecionar_cadastro = function(){\r\n    let btn_redirecionar_cadastro = document.querySelector('#redirecionar-p-cadastro')\r\n    let get_form_login = document.querySelector('.get-form-login')\r\n    let get_form_cadastro = document.querySelector('.get-form-cadastro')\r\n    let get_form_recuperar = document.querySelector('.get-form-recuperar')\r\n    let get_subtitulo = document.querySelector('.subtitulo')\r\n    btn_redirecionar_cadastro.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        get_form_login.classList.add('hide')\r\n        get_form_recuperar.classList.add('hide')\r\n        get_form_cadastro.classList.remove('hide')\r\n        get_subtitulo.classList.remove('hide')\r\n        get_subtitulo.innerHTML = \"Faça seu cadastro\"\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/redirecionar_registro.js?");

/***/ }),

/***/ "./src/handlers/retornar_id_api.js":
/*!*****************************************!*\
  !*** ./src/handlers/retornar_id_api.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get_email: () => (/* binding */ get_email)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/handlers/modal.js\");\n\r\n\r\n\r\nconst get_email = async () => {\r\n    let email_recuperar_input = document.querySelector(\"#email-recuperar\")\r\n\r\n    if (!email_recuperar_input.value.trim()) {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)('O campo de e-mail está vazio.')\r\n        return;\r\n    }\r\n\r\n    try {\r\n        const api_rec_url = \"http://localhost:3000/\"\r\n        const api_rec = await fetch(api_rec_url)\r\n        const dados_rec = await api_rec.json()\r\n        console.log(dados_rec);\r\n\r\n        const usuario_encontrado = dados_rec.find(usuario => \r\n            usuario.email.toLowerCase() === email_recuperar_input.value.toLowerCase().trim()\r\n        );\r\n\r\n        if (usuario_encontrado) {\r\n            return usuario_encontrado._id;\r\n        } else {\r\n            console.log('E-mail não encontrado.')\r\n            return null\r\n        }\r\n\r\n    } catch (error) {\r\n        console.error('Erro ao buscar os dados:', error)\r\n    }\r\n\r\n}\r\n \n\n//# sourceURL=webpack://estoque-book/./src/handlers/retornar_id_api.js?");

/***/ }),

/***/ "./src/handlers/retornar_senha_api.js":
/*!********************************************!*\
  !*** ./src/handlers/retornar_senha_api.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get_senha: () => (/* binding */ get_senha)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/handlers/modal.js\");\n\r\n\r\n\r\nconst get_senha = async () => {\r\n    let senha_recuperar_input = document.querySelector(\"#senha-recuperar\")\r\n    let senha_recuperar_confirmar_input = document.querySelector(\"#confirma-senha-recuperar\")\r\n\r\n    if (!senha_recuperar_input.value.trim()) {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)('Preencha o campo de senha.')\r\n        return\r\n    }\r\n\r\n    if (!senha_recuperar_confirmar_input.value.trim()) {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)('Preencha o campo de senha.')\r\n        return\r\n    }\r\n\r\n    try {\r\n        if(senha_recuperar_input.value.trim() === senha_recuperar_confirmar_input.value.trim()) {\r\n            return senha_recuperar_input.value\r\n        } else {\r\n            (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)('Erro ao alterar senha, verifique os dados.')\r\n        }\r\n\r\n        \r\n\r\n    } catch (error) {\r\n        console.error('Erro ao alterar senha', error)\r\n    }\r\n\r\n}\r\n \n\n//# sourceURL=webpack://estoque-book/./src/handlers/retornar_senha_api.js?");

/***/ }),

/***/ "./src/handlers/salvar_usuario_localstorage.js":
/*!*****************************************************!*\
  !*** ./src/handlers/salvar_usuario_localstorage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   salvar_usuario_localstorage: () => (/* binding */ salvar_usuario_localstorage)\n/* harmony export */ });\n\r\nconst salvar_usuario_localstorage = () => {\r\n    let lembrar_usuario_local = document.querySelector(\"#lembrar-usuario-input\").value\r\n    const nome_usuario_login = {\r\n        nome: lembrar_usuario_local\r\n    }\r\n    const usuarioJSON = JSON.stringify(nome_usuario_login)\r\n    localStorage.setItem('nome_usuario_login', usuarioJSON)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/salvar_usuario_localstorage.js?");

/***/ }),

/***/ "./src/handlers/usuario_salvo_login.js":
/*!*********************************************!*\
  !*** ./src/handlers/usuario_salvo_login.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usuario_localstorage_recuperar: () => (/* binding */ usuario_localstorage_recuperar)\n/* harmony export */ });\n\r\nconst usuario_localstorage_recuperar = () => {\r\n    const usuario_JSON = localStorage.getItem('nome_usuario_login')\r\n    const usuario_recuperado = JSON.parse(usuario_JSON)\r\n    let lembrar_acesso_recuperado = document.querySelector(\"#lembrar-usuario-input\")\r\n    lembrar_acesso_recuperado.value = usuario_recuperado.nome\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/usuario_salvo_login.js?");

/***/ }),

/***/ "./src/handlers/validar_cadastro_campos.js":
/*!*************************************************!*\
  !*** ./src/handlers/validar_cadastro_campos.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validar_form: () => (/* binding */ validar_form)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/handlers/modal.js\");\n\r\n\r\nlet validar_form = function(){\r\n    let usuario_cadastro = document.querySelector(\"#usuario-cadastro\")\r\n    let senha_cadastro = document.querySelector(\"#senha-cadastro\")\r\n    let senha_cadastro_confirmar = document.querySelector(\"#confirma-senha-cadastro\")\r\n    let email_cadastro = document.querySelector(\"#email-cadastro\")\r\n\r\n    let email_valido = function(email) {\r\n        let re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\r\n        return re.test(email)\r\n    }\r\n\r\n    if (usuario_cadastro.value === \"\") {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(\"O campo de usuário está vazio.\")\r\n        return false\r\n    }\r\n\r\n    if (senha_cadastro.value === \"\") {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(\"O campo de senha está vazio.\")\r\n        return false\r\n    }\r\n\r\n    if (senha_cadastro_confirmar.value === \"\") {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(\"O campo de confirmação de senha está vazio.\")\r\n        return false\r\n    }\r\n\r\n    if (email_cadastro.value === \"\") {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(\"O campo de e-mail está vazio.\")\r\n        return false\r\n    }\r\n\r\n    if (!email_valido(email_cadastro.value)) {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(\"Por favor, insira um e-mail válido.\")\r\n        return false\r\n    }\r\n\r\n    if (senha_cadastro.value !== senha_cadastro_confirmar.value) {\r\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.gera_modal)(\"Lamento, as senhas estão divergentes.\")\r\n        return false\r\n    }\r\n\r\n    return true\r\n}\r\n\r\n/*let btn_validar = function(){\r\n    btn_finalizar_cadastro.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n    \r\n        if(validar_form()) {\r\n            \r\n        } else {\r\n    \r\n            alert('deu errado')\r\n        }\r\n    })\r\n}*/\r\n\r\n\n\n//# sourceURL=webpack://estoque-book/./src/handlers/validar_cadastro_campos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/main.sass */ \"./src/styles/main.sass\");\n/* harmony import */ var _handlers_redirecionar_registro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/redirecionar_registro.js */ \"./src/handlers/redirecionar_registro.js\");\n/* harmony import */ var _handlers_redirecionar_login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/redirecionar_login.js */ \"./src/handlers/redirecionar_login.js\");\n/* harmony import */ var _handlers_entrar_sistema_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/entrar_sistema.js */ \"./src/handlers/entrar_sistema.js\");\n/* harmony import */ var _handlers_enviar_cadastro_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/enviar_cadastro.js */ \"./src/handlers/enviar_cadastro.js\");\n/* harmony import */ var _handlers_usuario_salvo_login_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/usuario_salvo_login.js */ \"./src/handlers/usuario_salvo_login.js\");\n/* harmony import */ var _handlers_recuperar_senha_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/recuperar_senha_form.js */ \"./src/handlers/recuperar_senha_form.js\");\n/* harmony import */ var _handlers_recuperar_senha_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/recuperar_senha_api.js */ \"./src/handlers/recuperar_senha_api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Redireciona usuário para tela de cadastro\r\n(0,_handlers_redirecionar_registro_js__WEBPACK_IMPORTED_MODULE_1__.redirecionar_cadastro)()\r\n//Redireciona usuário para tela de login\r\n;(0,_handlers_redirecionar_login_js__WEBPACK_IMPORTED_MODULE_2__.redirecionar_login)()\r\n//Redireciona usuário para tela de recuperar senha\r\n;(0,_handlers_recuperar_senha_form_js__WEBPACK_IMPORTED_MODULE_6__.recuperar_senha)()\r\n//POST\r\n;(0,_handlers_enviar_cadastro_js__WEBPACK_IMPORTED_MODULE_4__.btn_validar)()\r\n//Entrar sistema e salvar login\r\n;(0,_handlers_entrar_sistema_js__WEBPACK_IMPORTED_MODULE_3__.entrar_sistema)()\r\n//Recuperado usuário marcado para lembrar\r\n;(0,_handlers_usuario_salvo_login_js__WEBPACK_IMPORTED_MODULE_5__.usuario_localstorage_recuperar)()\r\n\r\n;(0,_handlers_recuperar_senha_api_js__WEBPACK_IMPORTED_MODULE_7__.alterar_senha)()\n\n//# sourceURL=webpack://estoque-book/./src/index.js?");

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