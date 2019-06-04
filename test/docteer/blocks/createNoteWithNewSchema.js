const navigateNotes = require('./navigateNotes');
const typeNote = require('./typeNote');
const waitForToast = require('./waitForToast');
const checkColor = require('./checkColor');
const chooseSchema = require('./chooseSchema');

module.exports = function createNoteWithNewSchema(schemaName, note) {
    navigateNotes('create');
    checkColor('green');
    chooseSchema(schemaName);
    typeNote(note);
    navigateNotes('save');
    checkColor('dark-gray');
    waitForToast('Saving...');
    waitForToast('Saved.');
};