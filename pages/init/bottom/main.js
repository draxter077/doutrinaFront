import pages from "./pages/main.js"

export default function bottom(){
    const bottom = document.createElement("div")
    bottom.className = "initBottom"
    bottom.appendChild(pages())
    return(bottom)
}