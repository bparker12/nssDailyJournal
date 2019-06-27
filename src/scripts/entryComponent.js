/*Define the keys and value for a JavaScript object that represents
a journal entry about what you learned today*/

//this is how the journal entries will be displayed to the DOM
function journalText(inputs) {
    return `
    <div class="entriesCSS">
        <h1 class="jDate">Today's Date: ${inputs.date}</h1>
        <h2 class="jConcepts">Today we learned: ${inputs.concepts_covered}
        <form>
        <textarea
        rows=""
        columns="25"
        name="conceptsCovered"
        id="conceptsCovered"
        class="label">${inputs.journal_entry}</textarea>
        </form>
        <p class = "jmood"> My mood for today is: ${inputs.mood}</p>
        </div>
        <button id="deleteBtn-${inputs.id}" class="delete">Delete Button</button>
        `
}
