const getDriver = require('../../../utils/getDriver');
const open = require('../actions/open');

module.exports = function openPage() {
    it('should open page', async () => {
        const driver = getDriver();
        await open(driver);
    });
};
