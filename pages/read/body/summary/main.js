async function scrollToID(id){
    const e = document.getElementById(id)
    e.scrollIntoView({behavior:"smooth"})
    e.style = "color: var(--colorRed);"
    await new Promise(resolve => setTimeout(resolve, 1000))
    e.style = "color: var(--colorBlack);"
}

export default function summary(data){
    const summary = document.createElement("div")
    summary.className = "readBodySummary"

    const title = document.createElement("div")
    title.className = "readBodySummaryTitle"
    title.innerHTML = data.title
    summary.appendChild(title)

    console.log(data)
    
    for(let i = 0; i < data.summary.length; i++){
        let chapter = document.createElement("div")
        chapter.className = "readBodySummaryChapter"
        chapter.innerHTML = `${i + 1}) ${data.summary[i].title}`
        chapter.onclick = function a(){scrollToID(data.summary[i].title)}
        summary.appendChild(chapter)
    }
    return(summary)
}