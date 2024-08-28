import pages from "./pages/main.js"
import miniLogo from "./miniLogo/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "searchResultsTop"
    top.appendChild(miniLogo())
    top.appendChild(pages())
    return(top)
}