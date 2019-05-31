const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function changeFieldType(schemaName, fieldName, fieldType) {
    it('should change ' + fieldName + ' fieldtype to ' + fieldType, async () => {
        const driver = getDriver();
        await click(driver, '[data-field=' + fieldName + '][data-name="' + schemaName + '"] [data-test-schema-field-type]');
        await click(driver, '[data-field=' + fieldName + '][data-name="' + schemaName + '"] [data-test-schema-field-type] [value=' + fieldType +']');
    });
}