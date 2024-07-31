import { validar_form } from './validar_cadastro_campos.js'

let usuario_cadastro_db = document.querySelector("#usuario-cadastro")
let senha_cadastro_db = document.querySelector("#senha-cadastro")
let senha_cadastro_confirmar_db = document.querySelector("#confirma-senha-cadastro")
let email_cadastro_db = document.querySelector("#email-cadastro")
let btn_finalizar_cadastro = document.querySelector("#finalizar-cadastro")

let btn_validar = function(){
    btn_finalizar_cadastro.addEventListener('click', async (e) => {
        e.preventDefault()

        if(validar_form()) {

            let post_data = {
                title: "foo",
                body: "bar",
                userId: 2
              }

            try {
                const response = await fetch('http://localhost:3000/usuarios/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post_data)
                })

                const result = await response.json()
                console.log('Sucesso:', result)
            } catch (error) {
                console.error('Erro:', error);
            }
            
        } else {
            alert('errou')
        }
    })
}



export {btn_validar}