import { validar_form } from './validar_cadastro_campos.js'
import { limpar_form } from './limpar_cadastro.js'
import { gera_modal } from './modal.js'

let btn_finalizar_cadastro = document.querySelector("#finalizar-cadastro")

let btn_validar = function(){
    btn_finalizar_cadastro.addEventListener('click', async (e) => {
        let usuario_cadastro_db = document.querySelector("#usuario-cadastro").value
        let senha_cadastro_db = document.querySelector("#senha-cadastro").value
        let senha_cadastro_confirmar_db = document.querySelector("#confirma-senha-cadastro").value
        let email_cadastro_db = document.querySelector("#email-cadastro").value
        e.preventDefault()

        if(validar_form()) {

            let post_data = {
                nome: usuario_cadastro_db,
                email: email_cadastro_db,
                password: senha_cadastro_db
            }

            try {
                const response = await fetch('http://localhost:3000/usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post_data)
                })

                const result = await response.json()
                if(!result.error){
                    gera_modal(result.message)
                    limpar_form()
                } else {
                    gera_modal(result.error)
                }
                
            } catch (error) {
                gera_modal(error)
                console.error('Erro:', error)
            }

            
            
        } else {
            gera_modal('Por favor, preencha todos os campos corretamente.')
        }
    })
}



export {btn_validar}