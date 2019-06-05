const navigateNotes = require('./navigateNotes');
const waitForToast = require('./waitForToast');
const waitForNoToasts = require('./waitForNoToasts');

module.exports = function refreshPage() {
   navigateNotes('refresh');
   waitForToast('Refreshing...');
   waitForToast('Refreshed.');
   waitForNoToasts();
};
