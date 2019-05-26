const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function switchToSignUp() {
    it('should switch to signup page', async () => {
        const driver = getDriver();
        await click(driver, '[href="/signup"]');
    });
};