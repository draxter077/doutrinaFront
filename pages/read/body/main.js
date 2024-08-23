import summary from "./summary/main.js"
import text from "./text/main.js"

function getRead(n){
    const a = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    const Title = {title: "Grande título super interessante bla bla bla oii como você está?"}
    const textData = [{chapter: "cap1",
                        parags: a
                    },
                    {chapter: "cap2",
                        parags: a
                    },
                    {chapter: "cap3",
                        parags: a
                    },
                    {chapter: "cap4",
                        parags: a
                    },
                    {chapter: "cap5",
                        parags: a
                    },
                    {chapter: "cap6",
                        parags: a
                    },
                    {chapter: "cap7",
                        parags: a
                    },
                    {chapter: "cap8",
                        parags: a
                    },
                    {chapter: "cap9",
                        parags: a
                    }]
    return({title: Title.title, textData: textData})
}

export default function body(n){
    const body = document.createElement("div")
    body.className = "readBody"
    const textData = getRead(n)
    let summaryData = []
    for(let i = 0; i < textData.textData.length; i++){
        summaryData.push({title: textData.textData[i].chapter})
    }
    let summar = {title: textData.title, summary: summaryData}
    body.appendChild(summary(summar))
    body.appendChild(text(textData.textData))
    return(body)
}