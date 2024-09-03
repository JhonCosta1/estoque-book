import { lembrar_usuario } from './lembrar_usuario.js'
import { valida_acesso } from './validar_entrar_sistema.js'

let entrar_sistema = function(){

    let btn_entrar_sistema = document.querySelector("#entrar-sistema")
    btn_entrar_sistema.addEventListener("click", (e) => {
        e.preventDefault()
        lembrar_usuario()
        valida_acesso()
    })
}


export {entrar_sistema}