
let recuperar_senha = function(){
    let btn_recuperar_senha = document.querySelector('#recuperar-senha-form')
    let get_form_login = document.querySelector('.get-form-login')
    let get_form_cadastro = document.querySelector('.get-form-cadastro')
    let get_form_recuperar = document.querySelector('.get-form-recuperar')
    let get_subtitulo = document.querySelector('.subtitulo')
    btn_recuperar_senha.addEventListener('click', (e) => {
        e.preventDefault()
        get_form_cadastro.classList.add('hide')
        get_subtitulo.classList.add('hide')
        get_form_recuperar.classList.remove('hide')
        get_subtitulo.classList.remove('hide')
        get_form_login.classList.add('hide')
        get_subtitulo.innerHTML = "Preecha os dados para atualizar senha"
    })
}


export {recuperar_senha}