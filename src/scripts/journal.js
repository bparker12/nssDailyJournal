/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
moodOptions()
API.getJournalEntries("_expand=mood").then(loopToDom)
console.log(API.getJournalEntries())
console.log()
searchBtListener()

let saveJournalEntry = document.querySelector("#journal-save-btn")

//event listener for the submit button on a new journal entry
saveJournalEntry.addEventListener("click", () => {
    let newDate = document.querySelector("#journalDate").value
    let newConcepts = document.querySelector("#conceptsCovered").value
    let newJEntry = document.querySelector("#journalEntry").value
    let newMood = document.querySelector("#moodForTheDay").id
    if (newDate === "" || newConcepts === "" || newJEntry === "" || newMood === "") {
        alert("Please fill in Missing Field")
    } else {
        let newEntry = createJournalEntryFunc(newDate, newConcepts, newJEntry, newMood)
        console.log(newEntry)
        postNewJournalEntry(newEntry)
            .then(data => data.json())
            .then(dataJS => {
                console.log(dataJS.newMood)
                journalContainer.innerHTML = ""
                API.getJournalEntries("_expand=mood")
                // .then( entryData => loopToDom(entryData))
            })
    }
})
let container = document.querySelector("#editFormContainer")
//factory function that controls how the new journal entry will be pushed to JSON server
let createJournalEntryFunc = (date, concepts, entry, mood) => {
    return ({
        date: date,
        concepts_covered: concepts,
        journal_entry: entry,
        mood: moodId
    })
}
let updateJournalEntryFunc = (date, concepts, entry, mood, id) => {
    return ({
        date: date,
        concepts_covered: concepts,
        journal_entry: entry,
        moodId: mood,
        id: id
    })
}

function deleteBtnListener() {
    let deleteClass = document.querySelectorAll(".delete")
    deleteClass.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", () => {
            console.log("is this delete?")
            let btnId = event.target.id.split('-')[1]
            console.log(btnId)
            deleteJournalEntry(btnId)
                .then(data => {
                    API.getJournalEntries("_expand=mood").then(loopToDom)
                })
        })
    })
}
function editBtnListener(jEntry) {
    // console.log("jEntry", jEntry)
    let editClass = document.querySelectorAll(".edit")
    editClass.forEach(editBtn => {
        editBtn.addEventListener("click", () => {
            editBtn.disabled = true
            let targetEdit = event.target.id.split('-')[1]
            // document.getElementById(`editBtn-${targetEdit}`).style.visibility = "hidden" - this hides the button
            console.log("edit?")
            API.getJournalEntry(targetEdit)
                .then(journalEntryEdit => {
                    let editForm = entryEditForm(journalEntryEdit)
                    console.log(editForm)
                    document.querySelector(`#editFormContainer-${targetEdit}`).appendChild(editForm)
                    saveEditBtn(targetEdit)
                })
            // addEditFormDOm(targetEdit, editForm)

        })
    })
}
function saveEditBtn(id) {
    let editSaveBtn = document.getElementById(`edit-save-btn-${id}`)
    editSaveBtn.addEventListener("click", () => {
        console.log("save edit button works")
        let updateDate = document.querySelector("#journalDate-edit").value
        let udpateConcept = document.querySelector("#conceptsCovered-edit").value
        let updateEntry = document.querySelector("#journalEntry-edit").value
        let updateMood = document.querySelector("#moodForTheDay-edit").value
        let updateId = document.querySelector("#updateJournalId").value
        let updateObj = updateJournalEntryFunc(updateDate, udpateConcept, updateEntry, updateMood, updateId)
        console.log(updateObj)
        updateJournalEntry(updateObj)
            .then(() => {
                API.getJournalEntries("_expand=mood").then(loopToDom)
            })

    })
}

function searchBtListener() {
    let svnBtn = document.querySelector("#search-journal")
    svnBtn.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            // console.log("search button works")
            let search = event.target.value
            console.log("search results:", search)
            let lowercaseSearch = search.toLowerCase()
            console.log("lowercase", lowercaseSearch)
            let searchResults = []
            API.getJournalEntries("_expand=mood").then(entries => {
                entries.forEach(entry =>{
                    let entryToLowercase = {
                    lowerDate: entry.date,
                    LowerConcepts: entry.concepts_covered.toLowerCase(),
                    LowerJEnrty: entry.journal_entry.toLowerCase(),
                    entryMood: entry.mood.label.toLowerCase(),
                    }
                    for (const value of Object.values(entryToLowercase)) {
                        if (value.includes(lowercaseSearch) === true && !searchResults.includes(entry)) {
                            searchResults.push(entry)
                            console.log(value)
                        }
                    }
                })
                console.log("search results", searchResults)
                journalContainer.innerHTML = ""
                loopToDom(searchResults)
                svnBtn.value = ""
            })

        }
    })
}

// function SearchDatabase(thing) {
//     API.getJournalEntries()
//         .then(entries => {
//             console.log("database: ", entries["date"])
//             entries.forEach(entries => {

//             })

//         })
// }


















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
    //