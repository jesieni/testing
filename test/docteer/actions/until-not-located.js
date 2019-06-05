const {By} = require('selenium-webdriver');

module.exports = async function untilNotLocated(driver, selector, interval = 50) {
    const locator = By.css(selector);
    while (true) {
        const elements = await driver.findElements(locator);
        if (elements.length === 0) return;
        await driver.sleep(interval);
    }
};
