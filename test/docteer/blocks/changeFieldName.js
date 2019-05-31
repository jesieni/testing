const getDriver = require('../../../utils/getDriver');
const {Key} = require('selenium-webdriver');
const click = require('../actions/click');
const fill = require('../actions/fill');

module.exports = function changeFieldType(schemaName, fieldIndex, fieldName) {
    it('should change field name to ' + fieldName, async () => {
        const driver = getDriver();
        await click(driver, '[data-index="' + fieldIndex + '"][data-name="' + schemaName + '"] [data-test-schema-field-name]');
        await fill(driver, '[data-index="' + fieldIndex + '"][data-name="' + schemaName + '"] [data-test-schema-field-name]', Key.chord(Key.CONTROL, 'a'), fieldName, Key.RETURN);
    });
}