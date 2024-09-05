import use from "./use/main.js"
import mostRead from "./mostRead/main.js"

export default function stats(){
    const stats = document.createElement("div")
    stats.className = "adminBodyStats"
    stats.appendChild(use())
    stats.appendChild(mostRead())
    return(stats)
}