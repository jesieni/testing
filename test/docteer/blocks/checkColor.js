const getDriver = require('../../../utils/getDriver');
const check = require('../actions/check');

module.exports = function checkColor(color) {
    it('should check if note title is ' + color, async () => {
        const driver = getDriver();
        await check(driver, color);
    });
};