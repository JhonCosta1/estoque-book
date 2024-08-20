import {salvar_usuario_localstorage} from './salvar_usuario_localstorage.js'

let lembrar_usuario = () => {
    let lembrar_acesso = document.querySelector("#lembrar-acesso-input")
    if(lembrar_acesso.checked) {
        salvar_usuario_localstorage()
    }
}

export {lembrar_usuario}