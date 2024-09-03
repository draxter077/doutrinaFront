import title from "./title/main.js"
import articles from "./articles/main.js"

function getSubject(n){
    const names = ["Direito Civil",
        "Direito Penal",
        "Direito Processual Civil",
        "Direito Internacional Público",
        "Direito Constitucional"
        ]
    const data = {title: names[n], 
                articles: [{title: "testestes testestes", type: "Artigo", id: 1, author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"},
                        {title: "testestes testestes testest testestes", id: 1, type: "Artigo", author: "autor da silva"}
                    ]
                }
    return(data)
}

export default function body(n){
    const body = document.createElement("div")
    const data = getSubject(n)
    body.className = "subjectBody"
    body.appendChild(title(data.title))
    body.appendChild(articles(data.articles))
    return(body)
}