const checkNoteName = require('../actions/check-note-name');

module.exports = function checkIfNameMatches(selector, title) {
   it('should check if note name matches with typed name', () => {
      checkNoteName(selector, title);
   });
}