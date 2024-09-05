import title from "./title/main.js"
import number from "./number/main.js"

export default function option(d){
    const option = document.createElement("div")
    option.className = "adminBodyStatsOption"
    option.appendChild(title(d.title))
    option.appendChild(number(d.number))
    return(option)
}