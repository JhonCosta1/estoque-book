
const salvar_usuario_localstorage = () => {
    let lembrar_usuario_local = document.querySelector("#lembrar-usuario-input").value
    const nome_usuario_login = {
        nome: lembrar_usuario_local
    }
    const usuarioJSON = JSON.stringify(nome_usuario_login)
    localStorage.setItem('nome_usuario_login', usuarioJSON)
}

export {salvar_usuario_localstorage}