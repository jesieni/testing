const {By} = require('selenium-webdriver');

module.exports = async function fill(driver, selector, ...value) {
    await driver.findElement(By.css(selector)).sendKeys(...value);
};