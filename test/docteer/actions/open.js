const {By, until} = require('selenium-webdriver');

module.exports = async function open(driver) {
    await driver.get('http://localhost:3000');
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.css('[data-application] + .logo'))));
};
