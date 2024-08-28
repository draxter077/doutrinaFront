import miniLogo from "./miniLogo/main.js"

export default function pages(){
    const pgs = ["Direito Civil",
                "Direito Penal",
                "Direito Processual Civil",
                "Direito Internacional Público",
                "Direito Constitucional"
                ]
    const pages = document.createElement("div")
    pages.appendChild(miniLogo())
    for(let i = 0; i < pgs.length; i++){
        let page = document.createElement("button")
        page.innerHTML = pgs[i]
        page.onclick = function a(){window.location.href = "/?s=2"}
        pages.appendChild(page)
    }
    return(pages)
}