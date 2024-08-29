import top from "./top/main.js"
import body from "./body/main.js"

export default function rightSide(){
    const rightSide = document.createElement("div")
    rightSide.className = "initBodyRightSide"
    rightSide.appendChild(top())
    rightSide.appendChild(body())
    return(rightSide)
}