import top from "./top/main.js"
import body from "./body/main.js"
import bottom from "./bottom/main.js"

export default function init(){
    const init = document.createElement("div")
    init.appendChild(top())
    init.appendChild(body())
    init.appendChild(bottom())
    return(init)
}