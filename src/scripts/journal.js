/*Define the keys and value for a JavaScript object that represents
a journal entry about what you learned today*/
const journalEntry = [
    {
        date: "6/3/2019",
        concepts_covered: "JS Dot Notation & Bracket Notation & Functions",
        journal_entry: "It was tough for me to pick up on the functions, need to work on them a lot more",
        mood: "Confused"

    },
    {
        date: "6/5/2019",
        concepts_covered: "Functions and API's with JSON",
        journal_entry: "API's look to be really tough, but seem to be really useful moving forward",
        mood: "Good"
    }
]

const collection = []

collection.push(journalEntry)
console.log(collection)

function journalText (date, concepts, entry, mood) {
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

for (let i = 0; i < journalEntry.length; i++) {
    const entries = journalEntry[i]
    journalContainer.innerHTML += journalText (
        entries.date,
        entries.concepts_covered,
        entries.journal_entry,
        entries.mood
        )
}
