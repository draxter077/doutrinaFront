export default function text(data){
    const text = document.createElement("div")
    text.className = "readBodyText"
    text.innerHTML = data.text
    return(text)
}