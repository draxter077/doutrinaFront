import option from "./option/main.js"

export default function use(){
    const use = document.createElement("div")
    const sts = [{title: "acessos totais", number: "1.234"},
                {title: "acessos mensais", number: "43"},
                {title: "acessos médios mensais", number: "123"},
                {title: "acessos diários", number: "12"},
                {title: "acessos médios diários", number: "2"}
                ]
    for(let i = 0; i < sts.length; i++){
        use.appendChild(option(sts[i]))
    }
    return(use)
}