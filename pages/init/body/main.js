import ad from "./ad/main.js"
import main from "./main/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBody"
    body.appendChild(ad())
    body.appendChild(main())
    body.appendChild(ad())
    return(body)
}