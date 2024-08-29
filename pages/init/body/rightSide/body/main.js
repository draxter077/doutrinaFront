import option from "./option/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBodyRightSideBody"
    let a = [{type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", title: "título", author: "João da Silva e Tarara dos Santos"}
    ]
    for(let i = 0; i < a.length; i++){
        body.appendChild(option(a[i]))
    }
    return(body)
}