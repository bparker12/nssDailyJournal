//this is how you fetch the data from the JSON server
const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())

    }
}
//this function allows you to push new journal entries into the DOM
function postNewJournalEntry(entry) {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}


// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(data => data.json())  // Parse as JSON