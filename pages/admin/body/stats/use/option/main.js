export default function option(){
    const option = document.createElement("div")
    option.appendChild(title())
    option.appendChild(number())
    return(option)
}