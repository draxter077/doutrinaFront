import bar from "./bar/main.js"
import button from "./button/main.js"

export default function search(){
    const search = document.createElement("div")
    search.className = "initBodySearch"
    search.appendChild(bar())
    search.appendChild(button())
    return(search)
}