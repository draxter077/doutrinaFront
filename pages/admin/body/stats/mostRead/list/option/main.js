import title from "./title/main.js"
import author from "./author/main.js"
import views from "./views/main.js"

export default function option(){
    const option = document.createElement("div")
    option.className = "adminBodyStatsMostReadOption"
    option.appendChild(title())
    option.appendChild(author())
    option.appendChild(views())
    return(option)
}