import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"

function articlePageAddFunctionsToButtons(){
}

export default function articleMain(){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv()
    articlePageAddFunctionsToButtons()
}