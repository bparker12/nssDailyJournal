
//targets radio buttons for the mood, and then clears the DOM and filters by the targeted mood radio button
let moodRadio = document.getElementsByName("mood")
moodRadio.forEach(radioBtn => {
    radioBtn.addEventListener("click", event => {
        const mood = event.target.value
        console.log("mood btn", mood)
        journalContainer.innerHTML = ""
        API.getJournalEntries()
            .then(data =>
                data.filter(entry => {
                    let filteredEntry = []
                    if (entry.mood === mood) {
                        filteredEntry.push(entry)
                        console.log(filteredEntry)
                        loopToDom(filteredEntry)
                    }
                })
            )
    })
})