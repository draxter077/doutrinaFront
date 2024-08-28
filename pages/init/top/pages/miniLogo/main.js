function returnToSearch(Event){
    const side = Event.target.parentElement.parentElement.parentElement.children[1]
    if(side.style.translate == "-50%"){
        side.style.translate = "0%"
    }
}

export default function miniLogo(){
    const miniLogo = document.createElement("img")
    miniLogo.src = "../../../../../miniLogo.png"
    miniLogo.onclick = function a(Event){returnToSearch(Event)}
    return(miniLogo)
}