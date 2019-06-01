const getDriver = require('../../../utils/getDriver');
const {Key} = require('selenium-webdriver');
const click = require('../actions/click');
const fill = require('../actions/fill');

module.exports = function changeFieldType(schemaName, fieldIndex, fieldName) {
    it('should change field name to ' + fieldName, async () => {
        const driver = getDriver();
        const selector = `[data-index="${fieldIndex}"][data-name="${schemaName}"] [data-test-schema-field-name]`;
        await click(driver, selector);
        await fill(driver, selector, Key.chord(Key.CONTROL, 'a'), fieldName, Key.RETURN);
    });
}