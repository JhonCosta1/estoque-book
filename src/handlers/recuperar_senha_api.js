import { gera_modal } from './modal.js'
import { get_email } from './retornar_id_api.js'
import { get_senha } from './retornar_senha_api.js'


const get_usuarios = async (usuario_atualizar, nova_senha) => {
    try {
        const url_api = `http://localhost:3000/usuario/${usuario_atualizar}`
        const api = await fetch(url_api, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: nova_senha
            })
        })
        if (api.ok) {
            const dados = await api.json()
            gera_modal(dados.message)
            return dados
        } else {
            const dados_error = await api.json()
            gera_modal(dados_error.error)
        }
    } catch (error) {
        console.log("Erro na API:", error)
    }
}


const alterar_senha = () => {
    let btn_senha_atualizar = document.querySelector("#recuperar-cadastro")
    btn_senha_atualizar.addEventListener('click', async (e) => {
        e.preventDefault()
        const api_email = await get_email()
        const api_senha = await get_senha()
        const api_retornada = await get_usuarios(api_email, api_senha)
        
    })
}

export {alterar_senha}

