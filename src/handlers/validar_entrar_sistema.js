import { gera_modal } from './modal.js'

const valida_acesso = async () => {
    let valida_usuario = document.querySelector(".valida-usuario")
    let valida_senha = document.querySelector("#valida-senha")

    if (!valida_usuario.value.trim()) {
        gera_modal('O campo Usuário está vazio.')
        return;
    }

    if (!valida_senha.value.trim()) {
        gera_modal('O campo de Senha está vazio.')
        return;
    }

    try {
        const url_api_acesso = `http://localhost:3000/usuario/auth/login`
        const api_acesso = await fetch(url_api_acesso, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: valida_usuario.value,
                password: valida_senha.value
            })
        })
        if (api_acesso.ok) {
            const dados_acesso = await api_acesso.json()
            if(dados_acesso.token) {
                gera_modal(dados_acesso.message)
                localStorage.setItem('token', dados_acesso.token)
                window.location.href = '/public/interno.html'
                return dados_acesso
            }

        } else {
            const dados_error = await api_acesso.json()
            gera_modal(dados_error.message)
        }
    } catch (error) {
        console.log("Erro na API:", error)
    }

}


export {valida_acesso}