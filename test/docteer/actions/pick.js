const {By} = require('selenium-webdriver');

module.exports = async function pick(driver, index) {
    await driver.findElement(By.css('[data-test-note]:nth-child(' + index + ')')).click();
};