export default function title(t){
    const title = document.createElement("div")
    title.className = "readBodySummaryTitle"
    title.innerHTML = t
    return(title)
}