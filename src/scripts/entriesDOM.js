
function loopToDom(stuff) {
    const journalContainer = document.querySelector(".entryLog")
    stuff.forEach(info => {
        journalContainer.innerHTML += journalText(info)
    })
}

