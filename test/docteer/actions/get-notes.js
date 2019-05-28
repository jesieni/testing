const {By} = require('selenium-webdriver');

module.exports = async function getNotes(driver) {
    const noteList = await driver.findElements(By.css('[data-test-note]'));
    return noteList;
};