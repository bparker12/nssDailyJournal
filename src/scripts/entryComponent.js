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
        <div id= "editFormContainer-${inputs.id}">
        <button id="editBtn-${inputs.id}" class="edit">Edit</Button>
        <button id="deleteBtn-${inputs.id}" class="delete">Delete</button>
        </div>
        </div>
        `
}

function entryEditForm (editEntry) {
    return `
    <form action="" class="form">
        <fieldset>
          <label for="journalDate">Date of Entry</label>
          <input
            type="date"
            name="edit-journalDate"
            required
            id="edit-journalDate"
            class="label"
            value="${editEntry.date}"
          />
        </fieldset>
      </form>
      <form action="" class="form">
        <fieldset>
          <label for="conceptsCovered">Concepts Covered</label>
          <textarea
            rows="5"
            columns="25"
            name="edit-conceptsCovered"
            required
            id="edit-conceptsCovered"
            class="label"
            value="${editEntry.concepts_covered}"
          ></textarea>
        </fieldset>
      </form>
      <form action="" class="form">
        <fieldset>
          <label for="jornalEntry">Journal Entry</label>
          <textarea
            rows="5"
            columns="25"
            name="edit-journalEntry"
            required
            id="edit-journalEntry"
            class="label"
            value="${editEntry.journal_entry}"
          ></textarea>
        </fieldset>
      </form>
      <form action="" class="form">
        <fieldset class="tiger">
          <label for="moodForTheDay">Mood for the Day</label>
          <select
            name="edit-moodForTheDay"
            required
            id="edit-moodForTheDay"
            class="label"
          >
            <option value="Happy" ${editEntry.mood === "Happy" ? "selected"  : ""}>Happy</option>
            <option value="Determined" ${editEntry.mood === "Determined" ? "selected"  : ""}>Determined</option>
            <option value="Frustrated" ${editEntry.mood === "Frustrated" ? "selected"  : ""}>Frustrated</option>
            <option value="Confused" ${editEntry.mood === "Confused" ? "selected"  : ""}>Confused</option>
            <option value="challenged" ${editEntry.mood === "Challenged" ? "selected"  : ""}>Challenged</option>
          </select>
        </fieldset>
      </form>
      <button type="Button" id="edit-jSave-btn">Update Journal Entry</button
    `
}