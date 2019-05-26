const {By, Key, until} = require('selenium-webdriver');

const getDriver = require('../utils/getDriver');

describe('google.com', () => {
    let driver;
    before(() => {
        driver = getDriver();
    });

    it('...', async () => {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    });
});
