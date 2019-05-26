const getDriver = require('../../../utils/getDriver');
const navigate = require('../actions/navigate');

module.exports = async function goToLogin() {
    it('should go to login page', async () => {
        const driver = getDriver();
        await navigate(driver, 'login');
    });
};
