export default function miniLogo(){
    const logo = document.createElement("img")
    logo.src = "../../../../../miniLogo.png"
    logo.onclick = function a(){window.location.href = "/"}
    return(logo)
}