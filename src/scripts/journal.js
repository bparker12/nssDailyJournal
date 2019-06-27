/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(loopToDom)
console.log(API.getJournalEntries())

let saveJournalEntry = document.querySelector("#journal-save-btn")

saveJournalEntry.addEventListener("click", () => {
    let newdate = document.querySelector("#journalDate").value
    let newConcepts = document.querySelector("#conceptsCovered").value
    let newJEntry = document.querySelector("#journalEntry").value
    let newMood = document.querySelector("#moodForTheDay").value
    if (newDate === "" || newConcepts === "" || newJEntry === "" || newMood === "") {
    } else {
        let newEntry = createJournalEntryFunc(newdate, newConcepts, newJEntry, newMood)
        console.log(newEntry)
        postNewJournalEntry(newEntry)
            .then(data => data.json())
            .then(dataJS => {
                console.log(dataJS.newMood)
                journalContainer.innerHTML = ""
                API.getJournalEntries()
                // .then( entryData => loopToDom(entryData))
            })
    }
})


let createJournalEntryFunc = (date, concepts, entry, mood) => {
    return ({
        date: date,
        concepts_covered: concepts,
        journal_entry: entry,
        mood: mood
    })
}


// API.getJournalEntries()
//     .then (entries => {
//         // entries.forEach(element => {
//         journalContainer.innerHTML += journalText(
//             entries.date,
//             entries.concepts_covered,
//             entries.journal_entry,
//             entries.mood
//         )
//     })



// console.log()
// for (let i = 0; i < entries.length; i++) {
//     const entry = entries[i]
//     journalContainer.innerHTML += journalText(
//         entry.date,
//         entry.concepts_covered,
//         entry.journal_entry,
//         entry.mood
//     )
// }
// What should happen when we finally have the array?







// /*Define the keys and value for a JavaScript object that represents
// a journal entry about what you learned today*/
// const collection = []

// collection.push(journalEntry)
// console.log(collection)

// function journalText(date, concepts, entry, mood) {
//     return `
//     <div class="entriesCSS">
//         <h1 class="jDate">Today's Date: ${date}</h1>
//         <h2 class="jConcepts">Today we learned: ${concepts}
//         <form>
//         <textarea
//         rows=""
//         columns="25"
//         name="conceptsCovered"
//         id="conceptsCovered"
//         class="label">${entry}</textarea>
//         </form>
//         <p class = "jmood"> My mood for today is: ${mood}</p>
//     </div>`
// }
// const journalContainer = document.querySelector(".entryLog")




// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(data => data.json())  // Parse as JSON
//     .then(entries => {
//         console.log()
//         for (let i = 0; i < entries.length; i++) {
//             const entry = entries[i]
//             journalContainer.innerHTML += journalText(
//                 entry.date,
//                 entry.concepts_covered,
//                 entry.journal_entry,
//                 entry.mood
//             )
//         }
//         // What should happen when we finally have the array?
//     })