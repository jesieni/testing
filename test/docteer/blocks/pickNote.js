const getDriver = require('../../../utils/getDriver');
const pick = require('../actions/pick');

module.exports = function pickNote(index) {
    it('should pick existing note', async () => {
        const driver = getDriver();
        await pick(driver, index);
    });
};
