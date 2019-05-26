const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function typeUserInfo(buttonName) {
    it('should click on ' + buttonName + ' button', async () => {
        const driver = getDriver();
        await click(driver, '[data-test-user="' + buttonName + '"]');
    });
};
