const getDriver = require('../../../utils/getDriver');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');

module.exports = async function checkNoteTitle(selector, title) {
    const driver = getDriver();
    const value = await driver.findElement(By.css(selector)).getAttribute('data-test-note');
    expect(value).to.equal(title);
};