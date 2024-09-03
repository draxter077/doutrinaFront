import user from "./user/main.js"
import password from "./password/main.js"
import enter from "./enter/main.js"

export default function login(){
    const login = document.createElement("div")
    login.className = "adminTopLogin"
    login.appendChild(user())
    login.appendChild(password())
    login.appendChild(enter())
    return(login)
}