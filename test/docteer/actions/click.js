const {By} = require('selenium-webdriver');

module.exports = async function click(driver, selector) {
    await driver.findElement(By.css(selector)).click();
};