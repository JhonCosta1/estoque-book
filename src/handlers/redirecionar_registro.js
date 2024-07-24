
let btn_redirecionar_cadastro = document.querySelector('#redirecionar-p-cadastro')
let get_form_login = document.querySelector('.get-form-login')
let get_form_cadastro = document.querySelector('.get-form-cadastro')
let get_subtitulo = document.querySelector('.subtitulo')


let redirecionar_cadastro = function(){
    btn_redirecionar_cadastro.addEventListener('click', (e) => {
        e.preventDefault()
        get_form_login.classList.add('hide')
        get_form_cadastro.classList.remove('hide')
        get_subtitulo.classList.remove('hide')
    })
}

export {redirecionar_cadastro}
