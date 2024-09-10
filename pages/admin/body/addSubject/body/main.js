import title from "./title/main.js"
import form from "./form/main.js"

export default function body(){
    const body = document.createElement("div")
    body.appendChild(title())
    body.appendChild(form())
    return(body)
}