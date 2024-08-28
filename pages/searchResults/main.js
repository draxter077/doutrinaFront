import top from "./top/main.js"
import body from "./body/main.js"
import bottom from "./bottom/main.js"

export default function searchResults(q){
    const searchResults = document.createElement("div")
    searchResults.appendChild(top())
    searchResults.appendChild(body(q))
    searchResults.appendChild(bottom())
    return(searchResults)
}