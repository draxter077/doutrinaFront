import typeDate from "./typeDate/main.js"
import title from "./title/main.js"
import author from "./author/main.js"

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
    summary.appendChild(typeDate(data.type, data.date))
    summary.appendChild(title(data.title))
    summary.appendChild(author(data.author))
    for(let i = 0; i < data.summary.length; i++){
        let chapter = document.createElement("div")
        chapter.className = "readBodySummaryChapter"
        chapter.innerHTML = `${i + 1}) ${data.summary[i].title}`
        chapter.onclick = function a(){scrollToID(data.summary[i].title)}
        summary.appendChild(chapter)
    }
    return(summary)
}