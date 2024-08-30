import top from "./top/main.js"
import body from "./body/main.js"
import bottom from "./bottom/main.js"

export default function read(n){
    const read = document.createElement("div")
    read.className = "read"
    read.appendChild(top())
    read.appendChild(body(n))
    read.appendChild(bottom())
    return(read)
}