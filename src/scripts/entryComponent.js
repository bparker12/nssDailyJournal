/*Define the keys and value for a JavaScript object that represents
a journal entry about what you learned today*/

//this is how the journal entries will be displayed to the DOM

function moodOptions () {
  let targetDiv = document.querySelector("#input-fields")
  let div = document.createElement("div")
  let html =
  `
  <form action="" class="form">
  <fieldset class="tiger">
  <label for="moodForTheDay">Mood for the Day</label>
  <select
  name="moodForTheDay"
  required
  id="moodForTheDay"
  class="label"
  >
  <option id="1" value="Happy">Happy</option>
  <option id="2" value="Determined">Determined</option>
  <option id="3" value="Frustrated">Frustrated</option>
  <option id="5" value="Confused">Confused</option>
  <option id="4" value="Challenged">Challenged</option>
  </select>
  </fieldset>
  </form>
  <button type="Button" id="journal-save-btn">Record Journal Entry</button>
  `
  div.innerHTML = html
  targetDiv.appendChild(moodOptions())
}



function journalText(inputs) {
    return `
    <div class="entriesCSS" id= "editFormContainer-${inputs.id}">
        <h1 class="jDate">Today's Date: ${inputs.date}</h1>
        <h2 class="jConcepts">Today we learned: ${inputs.concepts_covered}</h2>
        <form>
        <h3
        rows=""
        columns="25"
        name="conceptsCovered"
        id="conceptsCovered"
        class="label">${inputs.journal_entry}</h3>
        </form>
        <p class = "jmood"> My mood for today is: ${inputs.mood.label}</p>
        <div>
        <button id="editBtn-${inputs.id}" class="edit">Edit</Button>
        <button id="deleteBtn-${inputs.id}" class="delete">Delete</button>
        </div>
    </div>
        `
}

// function entryEditForm() {
//     return `
//     <div class="entriesCSS">
//     <input type="hidden" id="entry-editor" value="${editEntry.id}"
//     <input class="jDate" type="text" value="${editEntry.date}">
//     <input class="jConcepts" type="text" value="${editEntry.concepts_covered}">
//     <input type="textarea"
//     rows=""
//     columns="25"
//     name="conceptsCovered"
//     id="conceptsCovered"
//     class="label"
//     value="${editEntry.journal_entry}">
//           <select>
//             <option value="Happy" ${editEntry.mood === "Happy" ? "selected" : ""}>Happy</option>
//             <option value="Determined" ${editEntry.mood === "Determined" ? "selected" : ""}>Determined</option>
//             <option value="Frustrated" ${editEntry.mood === "Frustrated" ? "selected" : ""}>Frustrated</option>
//             <option value="Confused" ${editEntry.mood === "Confused" ? "selected" : ""}>Confused</option>
//             <option value="challenged" ${editEntry.mood === "Challenged" ? "selected" : ""}>Challenged</option>
//           </select>
//     <button id="saveEdit-${editEntry.id}" class="edit">Save</Button>
//     </div>
//     `

function entryEditForm(journal) {
    let editDiv = document.createElement("div")
    let editSave = document.createElement("button")
    let editForm =
    `
    <form class = "editForm">
    <input type="hidden" id="updateJournalId" value="${journal.id}">
    <fieldset>
    <label for="journalDate">Date of Entry</label>
    <input
      type="date"
      name="journalDate"
      required
      id="journalDate-edit"
      class="label"
      value=${journal.date}>
  </fieldset>
  <fieldset>
    <label for="conceptsCovered">Concepts Covered</label>
    <input
      type="text"
      name="conceptsCovered"
      required
      id="conceptsCovered-edit"
      class="label"
      value="${journal.concepts_covered}"
    >
  </fieldset>
  <fieldset>
    <label for="jornalEntry">Journal Entry</label>
    <input
      type="text"
      name="journalEntry"
      required
      id="journalEntry-edit"
      class="label"
      value="${journal.journal_entry}">
  </fieldset>
  <fieldset class="tiger">
    <label for="moodForTheDay">Mood for the Day</label>
    <select required id="moodForTheDay-edit">
      <option value="1"${journal.moodId === 1 ? "selected" : ""}>Happy</option>
      <option value="2" ${journal.moodId === 2 ? "selected" : ""}>Determined</option>
      <option value="3" ${journal.moodId === 3 ? "selected" : ""}>Frustrated</option>
      <option value="5" ${journal.moodId === 5 ? "selected" : ""}>Confused</option>
      <option value="4" ${journal.moodId === 4 ? "selected" : ""}>Challenged</option>
    </select>
  </fieldset>
    `
editDiv.innerHTML = editForm;
editSave.textContent = "Save";
editSave.setAttribute("id", `edit-save-btn-${journal.id}`)
editDiv.appendChild(editSave)

    return editDiv
}

    // `<div class="entriesCSS">
    // <input class="jDate" type="text" value="">
    // <input class="jConcepts" type="text" value="">
    // <input type="textarea"
    // rows=""
    // columns="25"
    // name="conceptsCovered"
    // id="conceptsCovered"
    // class="label"
    // value="">
    // <button id="saveEdit" class="edit">Save</Button>
    // </div>

    // <input type="hidden" id="entry-editor" value=""



    // <div id= "editFormContainer-${inputs.id}">

    // </div>
    // <form action="" class="form">
    //     <fieldset>
    //       <label for="journalDate">Date of Entry</label>
    //       <input
    //         type="date"
    //         name="edit-journalDate"
    //         required
    //         id="edit-journalDate"
    //         class="label"
    //         value="${editEntry.date}"
    //       />
    //     </fieldset>
    //   </form>
    //   <form action="" class="form">
    //     <fieldset>
    //       <label for="conceptsCovered">Concepts Covered</label>
    //       <textarea
    //         rows="5"
    //         columns="25"
    //         name="edit-conceptsCovered"
    //         required
    //         id="edit-conceptsCovered"
    //         class="label"
    //         value="${editEntry.concepts_covered}"
    //       ></textarea>
    //     </fieldset>
    //   </form>
    //   <form action="" class="form">
    //     <fieldset>
    //       <label for="jornalEntry">Journal Entry</label>
    //       <textarea
    //         rows="5"
    //         columns="25"
    //         name="edit-journalEntry"
    //         required
    //         id="edit-journalEntry"
    //         class="label"
    //         value="${editEntry.journal_entry}"
    //       ></textarea>
    //     </fieldset>
    //   </form>
    //   <form action="" class="form">
    //     <fieldset class="tiger">
    //       <label for="moodForTheDay">Mood for the Day</label>
    //       <select
    //         name="edit-moodForTheDay"
    //         required
    //         id="edit-moodForTheDay"
    //         class="label"
    //       >
    //         <option value="Happy" ${editEntry.mood === "Happy" ? "selected"  : ""}>Happy</option>
    //         <option value="Determined" ${editEntry.mood === "Determined" ? "selected"  : ""}>Determined</option>
    //         <option value="Frustrated" ${editEntry.mood === "Frustrated" ? "selected"  : ""}>Frustrated</option>
    //         <option value="Confused" ${editEntry.mood === "Confused" ? "selected"  : ""}>Confused</option>
    //         <option value="challenged" ${editEntry.mood === "Challenged" ? "selected"  : ""}>Challenged</option>
    //       </select>
    //     </fieldset>
    //   </form>
    //   <button type="Button" id="edit-jSave-btn">Update Journal Entry</button
    // `