import pages from "./pages/main.js"

export default function bottom(){
    const bottom = document.createElement("div")
    bottom.className = "subjectBodyBottom"
    bottom.appendChild(pages())
    return(bottom)
}