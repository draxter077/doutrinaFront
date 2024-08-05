import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"

function initPageAddFunctionsToButtons(){
    document.getElementsByClassName("initBodySearch")[0].children[1].onclick = function a(){
        console.log("OIIEIIEROEIROEI")
        window.location.href = '/Doutrina/?part=123';
    }
}

export default function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv()
    initPageAddFunctionsToButtons()
}