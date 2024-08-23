export default function text(data){
    const text = document.createElement("div")
    text.className = "readBodyText"
    for(let i = 0; i < data.length; i++){
        let part = document.createElement("div")
            let title = document.createElement("div")
            title.className = "readBodyTextTitle"
            title.innerHTML = data[i].chapter
            title.id = title.innerHTML
            part.appendChild(title)

            let words = document.createElement("div")
            words.className = "readBodyTextText"
            for(let j = 0; j < data[i].parags.length; j++){
                let p = document.createElement("p")
                p.innerHTML = data[i].parags[j]
                p.align = "justify"
                words.appendChild(p)
            }
            part.appendChild(words)
        text.appendChild(part)
    }
    return(text)
}