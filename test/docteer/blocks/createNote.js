const navigateNotes = require('./navigateNotes');
const typeNote = require('./typeNote');
const waitForToast = require('./waitForToast');
const checkColor = require('./checkColor');
const waitForNoToasts = require('./waitForNoToasts');

module.exports = function createNote(note) {
    navigateNotes('create');
    checkColor('green');
    typeNote(note);
    navigateNotes('save');
    checkColor('dark-gray');
    waitForToast('Saving...');
    waitForToast('Saved.');
    waitForNoToasts();
};