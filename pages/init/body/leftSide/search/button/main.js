function search(Event){
    const q = Event.target.parentElement.children[0].value
    const side = Event.target.parentElement.parentElement.parentElement
    side.style.translate = "-50%";
    //if(q.length != 0){
    //    window.location.href = `/?p=${q}`
    //}
}

export default function button(){
    const button = document.createElement("button")
    button.onclick = function a(Event){search(Event)}
    button.innerHTML = "Pesquisar"
    return(button)
}