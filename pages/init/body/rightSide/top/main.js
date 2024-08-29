import backButton from "./backButton/main.js"
import title from "./title/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "initBodyRightSideTop"
    top.appendChild(backButton())
    top.appendChild(title())
    return(top)
}