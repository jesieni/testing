const getDriver = require('../../../utils/getDriver');
const navigateNotes = require('../actions/navigate-notes');

module.exports = function saveNewSchema() {
    it('should pick existing note', async () => {
        const driver = getDriver();
        await navigateNotes(driver, 'save');
    });
};