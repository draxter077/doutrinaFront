import top from "./top/main.js"
import body from "./body/main.js"
import bottom from "./bottom/main.js"

export default function subject(n){
    const subject = document.createElement("div")
    subject.appendChild(top())
    subject.appendChild(body(n))
    subject.appendChild(bottom())
    return(subject)
}