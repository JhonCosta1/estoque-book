
let redirecionar_login = function(){
    let btn_redirecionar_login = document.querySelectorAll('.btn-voltar')
    let get_form_login = document.querySelector('.get-form-login')
    let get_form_cadastro = document.querySelector('.get-form-cadastro')
    let get_form_recuperar = document.querySelector('.get-form-recuperar')
    let get_subtitulo = document.querySelector('.subtitulo')

    btn_redirecionar_login.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            get_form_cadastro.classList.add('hide')
            get_subtitulo.classList.add('hide')
            get_form_recuperar.classList.add('hide')
            get_form_login.classList.remove('hide')
        })
    });
}


export {redirecionar_login}