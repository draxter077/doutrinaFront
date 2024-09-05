import body from "./body/main.js"

function expand(){
    const item = document.getElementsByClassName("adminBodyAddSubject")[0]
    const n = item.style.maxHeight
    if(n == "200px"){
        item.style.maxHeight = "1000px"
    }
    else{
        item.style.maxHeight = "200px"
    }
}

export default function addSubject(){
    const addSubject = document.createElement("div")
    addSubject.className = "adminBodyAddSubject"
    addSubject.onclick = expand
    addSubject.appendChild(body())
    return(addSubject)
}