function search(Event){
    const q = Event.target.parentElement.children[0].value
    window.location.href = "/?t=2"
}

export default function button(){
    const button = document.createElement("button")
    button.onclick = function a(Event){search(Event)}
    button.innerHTML = "Pesquisar"
    return(button)
}