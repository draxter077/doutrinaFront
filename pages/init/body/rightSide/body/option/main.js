import type_ from "./type/main.js"
import title from "./title/main.js"
import author from "./author/main.js"

export default function option(d){
    const option = document.createElement("div")
    option.appendChild(type_(d.type))
    option.appendChild(title(d.title))
    option.appendChild(author(d.author))
    option.onclick = function a(){window.location.href = `/?t=${d.id}`}
    return(option)
}