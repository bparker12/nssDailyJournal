
const journalContainer = document.querySelector(".entryLog")

//this is hot to loop over arrays and push them into the dom
function loopToDom(stuff) {
    stuff.forEach(info => {
        journalContainer.innerHTML += journalText(info)
        // console.log("what is this", info)
    })
    // console.log("stuff", stuff)
    deleteBtnListener()
    editBtnListener(stuff)
}


