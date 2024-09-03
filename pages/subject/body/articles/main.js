import article from "./article/main.js"

export default function articles(d){
    const articles = document.createElement("div")
    articles.className = "subjectBodyArticles"
    for(let i = 0; i < d.length; i++){
        articles.appendChild(article(d[i]))
    }
    return(articles)
}