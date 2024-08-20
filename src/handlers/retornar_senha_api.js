import { gera_modal } from './modal.js'


const get_senha = async () => {
    let senha_recuperar_input = document.querySelector("#senha-recuperar")
    let senha_recuperar_confirmar_input = document.querySelector("#confirma-senha-recuperar")

    if (!senha_recuperar_input.value.trim()) {
        gera_modal('Preencha o campo de senha.')
        return
    }

    if (!senha_recuperar_confirmar_input.value.trim()) {
        gera_modal('Preencha o campo de senha.')
        return
    }

    try {
        if(senha_recuperar_input.value.trim() === senha_recuperar_confirmar_input.value.trim()) {
            return senha_recuperar_input.value
        } else {
            gera_modal('Erro ao alterar senha, verifique os dados.')
        }

        

    } catch (error) {
        console.error('Erro ao alterar senha', error)
    }

}
export {get_senha} 