import date from "./date/main.js"
import author from "./author/main.js"

export default function authorDate(aut, dat){
    const authorDate = document.createElement("div")
    authorDate.className = "searchResultsBodyArticleAuthorDate"
    authorDate.appendChild(author(aut))
    authorDate.appendChild(date(dat))
    return(authorDate)
}