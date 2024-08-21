export default function pages(){
    const pgs = ["Direito Civil",
                "Direito Penal",
                "Direito Processual Civil",
                "Direito Internacional Público",
                "Direito Constitucional"
                ]
    const pages = document.createElement("div")
    for(let i = 0; i < pgs.length; i++){
        let page = document.createElement("button")
        page.innerHTML = pgs[i]
        pages.appendChild(page)
    }
    return(pages)
}