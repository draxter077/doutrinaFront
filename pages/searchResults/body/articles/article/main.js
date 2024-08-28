import title from "./title/main.js"
import authorDate from "./authorDate/main.js"

export default function article(art){
    const article = document.createElement("div")
    article.appendChild(title(art.title))
    article.appendChild(authorDate(art.author, art.date))
    article.onclick = function a(){window.location.href = "/?t=2"}
    return article
}