const untilVisible = require('./until-visible');

module.exports = async function waitForToast(driver, text) {
    const selector = '[data-test-toast="' + text + '"]';
    await untilVisible(driver, selector);
};
