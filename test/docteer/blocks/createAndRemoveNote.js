const typeNote = require('./typeNote');
const navigateNotes = require('./navigateNotes');
const checkColor = require('./checkColor');

module.exports = function createAndRemoveNote(note) {
    navigateNotes('create');
    checkColor('green');
    typeNote(note);
    navigateNotes('remove');
    checkColor('gray');
    navigateNotes('save');
};