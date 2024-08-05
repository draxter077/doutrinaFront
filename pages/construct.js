import initMain from "./init/main.js"
import articleMain from "./article/main.js"

export default async function constructMain(){
    const root = document.getElementById("root")
    const spec = window.location.href.split("?")[1]
    root.innerHTML = ""
    if(spec == undefined){
        initMain()
    }
    else if(spec == "part=123"){
        articleMain()
    }
}