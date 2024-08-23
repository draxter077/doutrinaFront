import pages from "./pages/main.js"

export default function bottom(){
    const bottom = document.createElement("div")
    bottom.className = "readBodyBottom"
    bottom.appendChild(pages())
    return(bottom)
}