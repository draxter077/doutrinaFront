import logo from "./logo/main.js"
import search from "./search/main.js"

export default function leftSide(){
    const leftSide = document.createElement("div")
    leftSide.className = "initBodyLeftSide"
    leftSide.appendChild(logo())
    leftSide.appendChild(search())
    return(leftSide)
}