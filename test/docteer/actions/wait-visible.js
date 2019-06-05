const untilVisible = require('./until-visible');

module.exports = async function waitUntilVisible(driver, index) {
    const selector = '[data-name="Schema ' + index + '"]';
    await untilVisible(driver, selector);
};
