function back(Event){
    const top = Event.target.parentElement.parentElement.parentElement.parentElement.children[0]
    const side = Event.target.parentElement.parentElement.parentElement
    top.style.top = "0px"
    side.style.translate = "0%"
}

export default function backButton(){
    const backButton = document.createElement("button")
    backButton.onclick = function a(Event){back(Event)}
    backButton.innerHTML = "Voltar"
    return(backButton)
}