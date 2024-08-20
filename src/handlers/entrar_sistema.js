import { lembrar_usuario } from './lembrar_usuario.js'

let entrar_sistema = function(){

    let btn_entrar_sistema = document.querySelector("#entrar-sistema")
    btn_entrar_sistema.addEventListener("click", (e) => {
        e.preventDefault()
        lembrar_usuario()
    })
}


export {entrar_sistema}