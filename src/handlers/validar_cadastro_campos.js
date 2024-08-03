import { gera_modal } from './modal.js'

let validar_form = function(){
    let usuario_cadastro = document.querySelector("#usuario-cadastro")
    let senha_cadastro = document.querySelector("#senha-cadastro")
    let senha_cadastro_confirmar = document.querySelector("#confirma-senha-cadastro")
    let email_cadastro = document.querySelector("#email-cadastro")

    let email_valido = function(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }

    if (usuario_cadastro.value === "") {
        gera_modal("O campo de usuário está vazio.")
        return false
    }

    if (senha_cadastro.value === "") {
        gera_modal("O campo de senha está vazio.")
        return false
    }

    if (senha_cadastro_confirmar.value === "") {
        gera_modal("O campo de confirmação de senha está vazio.")
        return false
    }

    if (email_cadastro.value === "") {
        gera_modal("O campo de e-mail está vazio.")
        return false
    }

    if (!email_valido(email_cadastro.value)) {
        gera_modal("Por favor, insira um e-mail válido.")
        return false
    }

    if (senha_cadastro.value !== senha_cadastro_confirmar.value) {
        gera_modal("Lamento, as senhas estão divergentes.")
        return false
    }

    return true
}

/*let btn_validar = function(){
    btn_finalizar_cadastro.addEventListener('click', (e) => {
        e.preventDefault()
    
        if(validar_form()) {
            
        } else {
    
            alert('deu errado')
        }
    })
}*/

export {validar_form}