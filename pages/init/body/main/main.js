import logo from "./logo/main.js"
import search from "./search/main.js"

export default function main(){
    const main = document.createElement("div")
    main.className = "initBodyMain"
    main.appendChild(logo())
    main.appendChild(search())
    return(main)
}