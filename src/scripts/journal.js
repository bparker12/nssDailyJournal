/*Define the keys and value for a JavaScript object that represents
a journal entry about what you learned today*/
const collection = []

collection.push(journalEntry)
console.log(collection)

function journalText(date, concepts, entry, mood) {
    return `
    <div class="entriesCSS">
        <h1 class="jDate">Today's Date: ${date}</h1>
        <h2 class="jConcepts">Today we learned: ${concepts}
        <form>
        <textarea
        rows=""
        columns="25"
        name="conceptsCovered"
        id="conceptsCovered"
        class="label">${entry}</textarea>
        </form>
        <p class = "jmood"> My mood for today is: ${mood}</p>
    </div>`
}
const journalContainer = document.querySelector(".entryLog")




fetch("http://localhost:3000/entries") // Fetch from the API
    .then(data => data.json())  // Parse as JSON
    .then(entries => {
        console.log()
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i]
            journalContainer.innerHTML += journalText(
                entry.date,
                entry.concepts_covered,
                entry.journal_entry,
                entry.mood
            )
        }
        // What should happen when we finally have the array?
    })