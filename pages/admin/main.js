import top from "./top/main.js"
import body from "./body/main.js"

export default function admin(){
    const admin = document.createElement("div")
    admin.className = "admin"
    admin.appendChild(top())
    admin.appendChild(body())
    return(admin)
}