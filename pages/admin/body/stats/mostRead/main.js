import title from "./title/main.js"
import list from "./list/main.js"

export default function mostRead(){
    const mostRead = document.createElement("div")
    mostRead.className = "adminBodyStatsMostRead"
    mostRead.appendChild(title())
    mostRead.appendChild(list())
    return(mostRead)
}