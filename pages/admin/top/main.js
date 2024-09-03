import logo from "./logo/main.js"
import login from "./login/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "adminTop"
    top.appendChild(logo())
    top.appendChild(login())
    return(top)
}