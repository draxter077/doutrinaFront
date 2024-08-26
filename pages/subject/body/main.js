import title from "./title/main.js"
import articles from "./articles/main.js"

function getSubject(n){
    const data = {title: "Algum Direito", 
                articles: [{title: "Bla bla bla1", date: "01/01/2022", author: "autor da silva"},
                        {title: "bla bla bla2", date: "01/01/2023", author: "autor da silva"},
                        {title: "bla bla bla3", date: "01/01/2024", author: "autor da silva"}
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