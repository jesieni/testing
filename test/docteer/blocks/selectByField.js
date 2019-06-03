const selectByFieldAction = require('../actions/select-by-field');
const getDriver = require('../../../utils/getDriver');

module.exports = function selectByField(name, value) {
    it('should select note with given field value', async () => {
        const driver = getDriver();
        await selectByFieldAction(driver, name, value);
    });
};
