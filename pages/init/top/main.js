import pages from "./pages/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "initTop"
    top.appendChild(pages())
    return(top)
}