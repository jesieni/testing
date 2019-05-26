const navigateNotes = require('./navigateNotes');
const typeNote = require('./typeNote');
const pickNote = require('./pickNote');
const waitForToast = require('./waitForToast');

module.exports = function editNote(index, note) {
    pickNote(index);
    navigateNotes('edit');
    typeNote(note);
    navigateNotes('save');
    waitForToast('Saving...');
    waitForToast('Saved.');
};