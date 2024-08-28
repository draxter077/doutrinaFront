import title from "./title/main.js"
import articles from "./articles/main.js"

function getResults(q){
    const data = {title: q, 
                articles: [{title: "Bla bla bla1", date: "01/01/2022", author: "autor da silva"},
                        {title: "bla bla bla2", date: "01/01/2023", author: "autor da silva"},
                        {title: "bla bla bla3", date: "01/01/2024", author: "autor da silva"},
                        {title: "Bla bla bla1", date: "01/01/2022", author: "autor da silva"},
                        {title: "bla bla bla2", date: "01/01/2023", author: "autor da silva"},
                        {title: "bla bla bla3", date: "01/01/2024", author: "autor da silva"},
                        {title: "Bla bla bla1", date: "01/01/2022", author: "autor da silva"},
                        {title: "bla bla bla2", date: "01/01/2023", author: "autor da silva"},
                        {title: "bla bla bla3", date: "01/01/2024", author: "autor da silva"},
                        {title: "Bla bla bla1", date: "01/01/2022", author: "autor da silva"},
                        {title: "bla bla bla2", date: "01/01/2023", author: "autor da silva"},
                        {title: "bla bla bla3", date: "01/01/2024", author: "autor da silva"}
                    ]
                }
    return(data)
}

export default function body(q){
    const body = document.createElement("div")
    const data = getResults(q)
    body.className = "searchResultsBody"
    body.appendChild(title(data.title))
    body.appendChild(articles(data.articles))
    return(body)
}