import option from "../../../rightSide/body/option/main.js"

function search(Event){
    const q = Event.target.parentElement.children[0].value
    if(q.length != 0){
        const side = document.getElementsByClassName("initBody")[0]
        const top = document.getElementsByClassName("initTop")[0]
        const title = document.getElementsByClassName("initBodyRightSideTop")[0].children[1]
        const body = document.getElementsByClassName("initBodyRightSideBody")[0]
        let a = [{type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
            {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"}
        ]
        body.innerHTML = ""
        for(let i = 0; i < a.length; i++){
            body.appendChild(option(a[i]))
        }
        title.innerHTML = q
        top.style.top = "-100%"
        side.style.translate = "-50%"
    }
}

export default function button(){
    const button = document.createElement("button")
    button.onclick = function a(Event){search(Event)}
    button.innerHTML = "Pesquisar"
    return(button)
}