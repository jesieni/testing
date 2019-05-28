const {expect} = require('chai');

module.exports = async function checkNoteTitle(driver, noteList, title) {
    for (const note of noteList) {
        const noteTitle = await note.getAttribute('data-test-note');
        if (noteTitle === title)
            return;
    }
    expect.fail();
};