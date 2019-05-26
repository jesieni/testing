const getDriver = require('../../../utils/getDriver');
const navigateNotesAction = require('../actions/navigate-notes');

module.exports = function navigateNotes(action) {
    it('should click on "' + action + '" button', async () => {
        const driver = getDriver();
        await navigateNotesAction(driver, action);
    });
};
