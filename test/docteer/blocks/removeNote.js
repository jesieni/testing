const navigateNotes = require('./navigateNotes');
const pickNote = require('./pickNote');
const waitForToast = require('./waitForToast');
const checkColor = require('./checkColor');
const waitForNoToasts = require('./waitForNoToasts');

module.exports = function removeNote(index) {
    pickNote(index);
    navigateNotes('edit');
    navigateNotes('remove');
    checkColor('red');
    navigateNotes('save');
    waitForToast('Saving...');
    waitForToast('Saved.');
    waitForNoToasts();
};
