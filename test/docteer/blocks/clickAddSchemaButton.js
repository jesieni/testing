const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function clickAddSchemaButton() {
    it('should click on "Add schema" button', async () => {
        const driver = getDriver();
        await click(driver, '[data-test-schema-add=true]');
    });
}