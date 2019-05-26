const {By} = require('selenium-webdriver');

module.exports = async function navigate(driver, view) {
    await driver.findElement(By.css('[data-test-notes-action=' + view + ']')).click();
};
