import summary from "./summary/main.js"
import text from "./text/main.js"

export default function body(n){
    const body = document.createElement("div")
    body.className = "readBody"
    const summaryData = [{title: "blabla"}, {title: "blabla2"}]
    body.appendChild(summary(summaryData))
    const textData = {text: "oqwieucqowkdfosd"}
    body.appendChild(text(textData))
    return(body)
}