const getDriver = require('../../../utils/getDriver');
const fill = require('../actions/fill');

module.exports = function typeUserInfo(email, password) {
    it('should type in email and password', async () => {
        const driver = getDriver();
        await fill(driver, '#email', email);
        await fill(driver, '#password', password);
    });
};
