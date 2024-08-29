import top from "./top/main.js"

export default function rightSide(){
    const rightSide = document.createElement("div")
    rightSide.className = "initBodyRightSide"
    rightSide.appendChild(top())
    return(rightSide)
}