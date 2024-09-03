import top from "./top/main.js"

export default function admin(){
    const admin = document.createElement("div")
    admin.className = "admin"
    admin.appendChild(top())
    return(admin)
}