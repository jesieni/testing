const untilNotLocated = require('./until-not-located');

module.exports = async function waitForNoToast(driver) {
    const selector = '[data-test-toast]';
    await untilNotLocated(driver, selector);
};


