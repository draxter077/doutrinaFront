import type_ from "./type/main.js"
import title from "./title/main.js"
import author from "./author/main.js"

export default function article(d){
    const article = document.createElement("div")
    article.appendChild(type_(d.type))
    article.appendChild(title(d.title))
    article.appendChild(author(d.author))
    article.onclick = function a(){window.location.href = `/?t=${d.id}`}
    return(article)
}