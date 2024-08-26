import article from "./article/main.js"

export default function articles(n){
    const articles = document.createElement("div")
    articles.className = "subjectBodyArticles"
    for(let i = 0; i < n.length; i++){
        articles.appendChild(article(n[i]))
    }
    return(articles)
}