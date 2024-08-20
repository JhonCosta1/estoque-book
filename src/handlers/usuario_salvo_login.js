
const usuario_localstorage_recuperar = () => {
    const usuario_JSON = localStorage.getItem('nome_usuario_login')
    const usuario_recuperado = JSON.parse(usuario_JSON)
    let lembrar_acesso_recuperado = document.querySelector("#lembrar-usuario-input")
    lembrar_acesso_recuperado.value = usuario_recuperado.nome
}


export {usuario_localstorage_recuperar}