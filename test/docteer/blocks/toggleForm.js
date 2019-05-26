const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function toggleForm() {
    it('should toggle "change password" form', async () => {
        const driver = getDriver();
        await click(driver, 'summary');
        await driver.sleep(250);
    });
};
