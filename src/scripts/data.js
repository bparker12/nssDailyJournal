//this is how you fetch the data from the JSON server
const API = {
    // getJournalEntries() {
    //     return fetch("http://localhost:8088/entries?_expand=mood")
    //         .then(response => response.json())
    getJournalEntries(info) {
        let url = ("http://localhost:8088/entries")
        if (info) {
            url += `?${info}`
        }
        return fetch(url)
            .then(response => response.json())

    },
    getConceptEntries() {
        return fetch("http://localhost:8088/entries/concepts_covered")
            .then(response => response.json())

    },
    getJournalEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`)
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

function deleteJournalEntry(entry){
return fetch(`http://localhost:8088/entries/${entry}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => res.json())
}

function updateJournalEntry(updateEntry) {
    return fetch(`http://localhost:8088/entries/${updateEntry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateEntry)
    })
  }

// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(data => data.json())  // Parse as JSON