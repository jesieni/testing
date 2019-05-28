const getDriver = require('../../../utils/getDriver');
const checkNoteName = require('../actions/check-note-name');
const getNotes = require('../actions/get-notes');

module.exports = function checkIfNameMatches(title) {
   it('should check if note name matches with typed name', async () => {
      const driver = getDriver();
      const noteList = await getNotes(driver);
      await checkNoteName(driver, noteList, title);
   });
}