const navigateNotes = require('./navigateNotes');
const waitForToast = require('./waitForToast');

module.exports = function refreshPage() {
   navigateNotes('refresh');
   waitForToast('Refreshing...');
   waitForToast('Refreshed.');
};
