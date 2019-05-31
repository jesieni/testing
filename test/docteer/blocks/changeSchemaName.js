const getDriver = require('../../../utils/getDriver');
const {Key} = require('selenium-webdriver');
const click = require('../actions/click');
const fill = require('../actions/fill');
const waitUntilVisible = require('../actions/wait-visible');

module.exports = function changeSchemaName(index, schemaName) {
    it('should change schema name to ' + schemaName, async () => {
        const driver = getDriver();
        await click(driver, '[data-test-schema="Schema ' + index + '"]');
        await waitUntilVisible(driver, index);
        await click(driver, '[data-test-schema="Schema ' + index + '"] [type="Schema name"]');
        await fill(driver, '[data-test-schema="Schema ' + index + '"] [type="Schema name"]', Key.chord(Key.CONTROL, 'a'), schemaName, Key.RETURN);
    });
}