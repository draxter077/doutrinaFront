import date from "./date/main.js"
import author from "./author/main.js"

export default function authorDate(aut, dat){
    const authorDate = document.createElement("div")
    authorDate.appendChild(author(aut))
    authorDate.appendChild(date(dat))
    return(authorDate)
}