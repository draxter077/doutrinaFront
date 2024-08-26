export default function title(name){
    const title = document.createElement("div")
    title.className = "subjectBodyTitle"
    title.innerHTML = name
    return(title)
}