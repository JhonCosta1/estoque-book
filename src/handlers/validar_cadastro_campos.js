let usuario_cadastro = document.querySelector("#usuario-cadastro")
let senha_cadastro = document.querySelector("#senha-cadastro")
let senha_cadastro_confirmar = document.querySelector("#confirma-senha-cadastro")
let email_cadastro = document.querySelector("#email-cadastro")

let validar_form = function(){

    if (
            usuario_cadastro.value !== "" &&
            senha_cadastro.value !== "" &&
            senha_cadastro_confirmar.value !== "" &&
            email_cadastro.value !== ""
        ) {
            return true
    } else {
        return false
    }
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