
//targets radio buttons for the mood, and then clears the DOM and filters by the targeted mood radio button
let moodRadio = document.getElementsByName("mood")
moodRadio.forEach(radioBtn => {
    radioBtn.addEventListener("click", event => {
        const mood = parseInt(event.target.id)
        // console.log("mood btn", mood)
        journalContainer.innerHTML = ""
        API.getJournalEntries("_expand=mood")
            .then(data =>
                data.filter(entry => {
                    // console.log("entry after filter", entry)
                    let filteredEntry = []
                    // console.log("entry mood id", entry.moodId)
                    if (entry.moodId === mood) {
                        filteredEntry.push(entry)
                        loopToDom(filteredEntry)
                    }
                })
            )
    })
})