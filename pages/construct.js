import init from "./init/main.js"
import read from "./read/main.js"
import subject from "./subject/main.js"
import admin from "./admin/main.js"

export default async function construct(data){
    const root = document.getElementById("root")
    const atts = window.location.href.split("?")[1]
    root.innerHTML = ""
    if(atts != undefined){
        const attsType = atts.split("=")[0]
        const attsValue = atts.split("=")[1]
        if(attsType == "t"){
            root.appendChild(read(attsValue))
        }
        else if(attsType == "s"){
            root.appendChild(subject(attsValue))
        }
        else if(attsType == "p"){
            if(attsValue == "admin"){
                root.appendChild(admin())
            }
        }
    }
    else{
        if(data == undefined){
            root.appendChild(init())
        }
    }
}