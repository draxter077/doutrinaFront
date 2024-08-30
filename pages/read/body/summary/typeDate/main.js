import type_ from "./type/main.js"
import date from "./date/main.js"

export default function typeDate(t, d){
    const typeDate = document.createElement("div")
    typeDate.appendChild(type_(t))
    typeDate.appendChild(date(d))
    return(typeDate)
}