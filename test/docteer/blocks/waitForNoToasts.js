const getDriver = require('../../../utils/getDriver');
const waitNoToast = require('../actions/wait-no-toasts');

module.exports = function waitForNoToasts() {
    it('should wait for no toasts', async () => {
        const driver = getDriver();
        await waitNoToast(driver);
    });
};