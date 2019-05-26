const navigateNotes = require('./navigateNotes');
const pickNote = require('./pickNote');
const waitForToast = require('./waitForToast');
const checkColor = require('./checkColor');

module.exports = function cloneNote(index) {
    pickNote(index);
    navigateNotes('edit');
    navigateNotes('clone');
    checkColor('green');
    navigateNotes('save');
    checkColor('dark-gray');
    waitForToast('Saving...');
    waitForToast('Saved.');
};