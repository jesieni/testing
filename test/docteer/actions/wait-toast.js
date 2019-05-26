const {By, until} = require('selenium-webdriver');

module.exports = async function waitForToast(driver, text) {
    await driver.wait(until.elementLocated(By.css('[data-test-toast="' + text + '"]')));
    await driver.wait(until.elementIsVisible(driver.findElement(By.css('[data-test-toast="' + text + '"]'))));
};
