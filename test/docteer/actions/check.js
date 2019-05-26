const {By} = require('selenium-webdriver');

module.exports = async function check(driver, color) {
    await driver.findElement(By.css('.' + color));
};