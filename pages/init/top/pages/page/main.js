export default function page(d){
    const page = document.createElement("button")
    page.innerHTML = d.text
    page.onclick = function a(){window.location.href = `/?s=${d.id}`}
    return(page)
}