import input from "./input/main.js"
import button from "./button/main.js"

export default function form(){
    const form = document.createElement("div")
    form.className = "adminBodyAddSubjectForm"
    form.appendChild(input())
    form.appendChild(button())
    return(form)
}