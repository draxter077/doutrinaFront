import logo from "./logo/main.js"
import search from "./search/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBody"
    body.appendChild(logo())
    body.appendChild(search())
    return(body)
}