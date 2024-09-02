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
        page.onclick = function a(){window.location.href = `/?s=${i}`}
        pages.appendChild(page)
    }
    return(pages)
}