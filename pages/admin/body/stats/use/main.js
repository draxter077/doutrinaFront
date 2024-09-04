import option from "./option/main.js"

export default function use(){
    const use = document.createElement("div")
    const sts = [{title: "totais", number: "1.234"},
                {title: "mensais", number: "43"}
                ]
    for(let i = 0; i < sts.length; i++){
        use.appendChild(option(sts[i]))
    }
    return(use)
}