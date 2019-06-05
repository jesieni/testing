const {By, until} = require('selenium-webdriver');

module.exports = async function untilVisible(driver, selector) {
    const locator = By.css(selector);
    await driver.wait(until.elementLocated(locator));
    await driver.wait(until.elementIsVisible(driver.findElement(locator)));
};
