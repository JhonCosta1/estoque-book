import { gera_modal } from './modal.js'


const get_email = async () => {
    let email_recuperar_input = document.querySelector("#email-recuperar")

    if (!email_recuperar_input.value.trim()) {
        gera_modal('O campo de e-mail está vazio.')
        return;
    }

    try {
        const api_rec_url = "http://localhost:3000/"
        const api_rec = await fetch(api_rec_url)
        const dados_rec = await api_rec.json()
        console.log(dados_rec);

        const usuario_encontrado = dados_rec.find(usuario => 
            usuario.email.toLowerCase() === email_recuperar_input.value.toLowerCase().trim()
        );

        if (usuario_encontrado) {
            return usuario_encontrado._id;
        } else {
            console.log('E-mail não encontrado.')
            return null
        }

    } catch (error) {
        console.error('Erro ao buscar os dados:', error)
    }

}
export {get_email} 