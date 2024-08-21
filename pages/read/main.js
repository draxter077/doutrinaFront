import top from "./top/main.js"
import body from "./body/main.js"

export default function read(n){
    const read = document.createElement("div")
    read.appendChild(top())
    read.appendChild(body(n))
    //article.appendChild(bottom())
    return(read)
}