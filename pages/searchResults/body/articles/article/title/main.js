export default function title(tit){
    const title = document.createElement("div")
    title.className = "searchResultsBodyArticleTitle"
    title.innerHTML = tit
    return(title)
}