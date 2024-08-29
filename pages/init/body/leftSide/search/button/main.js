function search(Event){
    const q = Event.target.parentElement.children[0].value
    const side = Event.target.parentElement.parentElement.parentElement
    const top = Event.target.parentElement.parentElement.parentElement.parentElement.children[0]
    const bottom = Event.target.parentElement.parentElement.parentElement.parentElement.children[2]
    top.style.top = "-100%"
    bottom.style.bottom = "-100%"
    side.style.translate = "-50%"
}

export default function button(){
    const button = document.createElement("button")
    button.onclick = function a(Event){search(Event)}
    button.innerHTML = "Pesquisar"
    return(button)
}