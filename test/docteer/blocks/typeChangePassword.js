const getDriver = require('../../../utils/getDriver');
const fill = require('../actions/fill');

module.exports = function typeChangePassword(password, newpassword1, newpassword2) {
    it('should type in old and new password', async () => {
        const driver = getDriver();
        await fill(driver, '#current', password);
        await fill(driver, '#new1', newpassword1);
        await fill(driver, '#new2', newpassword2);
    });
};
