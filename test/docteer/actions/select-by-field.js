const getNotes = require('./get-notes');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');

module.exports = async function selectByField(driver, name, value) {
    for (const note of await getNotes(driver)) {
        await note.click();
        for (const field of await driver.findElements(By.css('[data-test-note-field]')))
            if (name === await field.getAttribute('data-test-note-field'))
                if (value === await field.getText())
                    return;
    }
    expect.fail();
};