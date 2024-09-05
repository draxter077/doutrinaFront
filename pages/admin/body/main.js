import stats from "./stats/main.js"
import addSubject from "./addSubject/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "adminBody"
    body.appendChild(stats())
    body.appendChild(addSubject())
    return(body)
}