const {By, until} = require('selenium-webdriver');

module.exports = async function waitUntilVisible(driver, index) {
    await driver.wait(until.elementLocated(By.css('[data-name="Schema ' + index + '"]')));
    await driver.wait(until.elementIsVisible(driver.findElement(By.css('[data-name="Schema ' + index + '"]'))));
}