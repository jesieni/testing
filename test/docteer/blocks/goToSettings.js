const getDriver = require('../../../utils/getDriver');
const navigate = require('../actions/navigate');

module.exports = function goToSettings() {
    it('should go to settings page', async () => {
        const driver = getDriver();
        await navigate(driver, 'settings');
    });
};
