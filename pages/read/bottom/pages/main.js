export default function pages(){
    const pgs = ["Colaboradores",
        "Resumos",
        "Fichamentos",
        "Dicionário Jurídico",
        "Sobre"
        ]
    const pages = document.createElement("div")
    for(let i = 0; i < pgs.length; i++){
        let page = document.createElement("button")
        page.innerHTML = pgs[i]
        pages.appendChild(page)
    }
    return(pages)
}