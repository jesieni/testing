const getDriver = require('../../../utils/getDriver');
const navigate = require('../actions/navigate');
const waitForToast = require('./waitForToast');

module.exports = function logOut(){
    it('should log current user out', async () => {
        const driver = getDriver();
        await navigate(driver, 'logout');
    });

    waitForToast('Logging out...');
    waitForToast('Logged out.');
};