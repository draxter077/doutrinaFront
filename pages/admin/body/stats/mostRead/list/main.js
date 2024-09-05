import option from "./option/main.js"

export default function list(){
    const list = document.createElement("div")
    const ops = [{type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos", views: "1"}
    ]
    for(let i = 0; i < ops.length; i++){
        list.appendChild(option(ops[i]))
    }
    return(list)
}