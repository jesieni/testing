const {By} = require('selenium-webdriver');
const {expect} = require('chai');

module.exports = async function checkNoteTitle(driver, selector, title) {
    const value = await driver.findElement(By.css(selector)).getAttribute('data-test-note');
    expect(value).to.be(title);
};