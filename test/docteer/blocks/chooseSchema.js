const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');

module.exports = function chooseSchema(schemaName) {
    it('should choose ' + schemaName + ' schema', async () => {
        const driver = getDriver();
        await click(driver, '[title=Schema]');
        for (const option of await driver.findElements(By.css('option'))) {
            if (schemaName === await option.getText()) {
                await option.click();
                return;
            }
        }
        expect.fail();
    });
};