
const journalContainer = document.querySelector(".entryLog")

function loopToDom(stuff) {
    stuff.forEach(info => {
        journalContainer.innerHTML += journalText(info)
    })
}

