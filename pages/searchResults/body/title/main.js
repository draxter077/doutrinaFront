export default function title(name){
    const title = document.createElement("div")
    title.className = "searchResultsBodyTitle"
    title.innerHTML = name
    return(title)
}