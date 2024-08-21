export default function logo(){
    const logo = document.createElement("img")
    logo.className = "initBodyLogo"
    logo.src = "../../../../../logo.png"
    logo.innerHTML = "doutrina.net"
    return(logo)
}