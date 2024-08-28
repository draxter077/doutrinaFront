function search(Event){
    const q = Event.target.parentElement.children[0].value
    if(q.length != 0){
        window.location.href = `/?p=${q}`
    }
}

export default function button(){
    const button = document.createElement("button")
    button.onclick = function a(Event){search(Event)}
    button.innerHTML = "Pesquisar"
    return(button)
}