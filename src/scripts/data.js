
const API = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(response => response.json())
                
        }
    }


// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(data => data.json())  // Parse as JSON