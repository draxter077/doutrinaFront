export default function summary(data){
    const summary = document.createElement("div")
    summary.className = "readBodySummary"
    for(let i = 0; i < data.length; i++){
        let chapter = document.createElement("div")
        chapter.innerHTML = `${i + 1}) ${data[i].title}`
        summary.appendChild(chapter)
    }
    return(summary)
}