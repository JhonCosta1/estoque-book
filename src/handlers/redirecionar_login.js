let btn_redirecionar_login = document.querySelector('#redirecionar-p-login')
let get_form_login = document.querySelector('.get-form-login')
let get_form_cadastro = document.querySelector('.get-form-cadastro')
let get_subtitulo = document.querySelector('.subtitulo')


let redirecionar_login = function(){
    btn_redirecionar_login.addEventListener('click', (e) => {
        e.preventDefault()
        get_form_cadastro.classList.add('hide')
        get_subtitulo.classList.add('hide')
        get_form_login.classList.remove('hide')
    })
}


export {redirecionar_login}