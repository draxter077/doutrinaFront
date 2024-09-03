import stats from "./stats/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "adminBody"
    body.appendChild(stats())
    return(body)
}