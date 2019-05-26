const getDriver = require('../../../utils/getDriver');
const waitToast = require('../actions/wait-toast');

module.exports = function waitForToast(text) {
    it('should wait for "' + text + '" toast', async () => {
        const driver = getDriver();
        await waitToast(driver, text);
    });
};
