import page from "./page/main.js"

export default function pages(){
    const pgs = ["Direito Civil",
                "Direito Penal",
                "Direito Processual Civil",
                "Direito Internacional Público",
                "Direito Constitucional"
                ]
    const pages = document.createElement("div")
    for(let i = 0; i < pgs.length; i++){
        pages.appendChild(page({text: pgs[i], id: i}))
    }
    return(pages)
}