const getDriver = require('../../../utils/getDriver');
const click = require('../actions/click');

module.exports = function saveChangePassword() {
    it('should save changed password', async () => {
        const driver = getDriver();
        await click(driver, '[title="Change password"]');
    });
};
