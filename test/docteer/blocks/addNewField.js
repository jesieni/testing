const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function addNewField(schemaName) {
    it('should add new field to schema ' + schemaName, async () => {
        const driver = getDriver();
        await click(driver, '[data-name="' + schemaName + '"] [title="Add field"]');
    });
}