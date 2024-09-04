import use from "./use/main.js"

export default function stats(){
    const stats = document.createElement("div")
    stats.className = "adminBodyStats"
    stats.appendChild(use())
    return(stats)
}