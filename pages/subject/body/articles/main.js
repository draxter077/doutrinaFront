import article from "./article/main.js"

function getArticles(){
    const data = [{type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"},
        {type: "Artigo", id: "1", title: "título", author: "João da Silva e Tarara dos Santos"}
    ]
    return(data)
}

export default function articles(){
    const articles = document.createElement("div")
    articles.className = "subjectBodyArticles"
    const d = getArticles()
    for(let i = 0; i < d.length; i++){
        articles.appendChild(article(d[i]))
    }
    return(articles)
}