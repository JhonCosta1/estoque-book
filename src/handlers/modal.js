let gera_modal = (msg) => {
    let modal = document.querySelector("#area-login")
    let valida_modal = document.querySelector(".modal-formato")
    
    if(!valida_modal){
        let div = document.createElement("div")
        div.classList.add("modal-formato")
        let p = document.createElement("p")
        let btn_close_modal = document.createElement("button")
        p.classList.add("modal-p")
        p.innerHTML = msg
        div.appendChild(p)
        div.appendChild(btn_close_modal)
        btn_close_modal.classList.add("btn", "btn-modal")
        btn_close_modal.innerText = "Fechar"
        modal.appendChild(div)
        
        btn_close_modal.addEventListener('click', (e) => {
            e.preventDefault()
            div.remove()
        })
    }

}


export {gera_modal}