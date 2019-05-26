const {By} = require('selenium-webdriver');

const getDriver = require('../utils/getDriver');

describe('9gag.com', () => {
    openPage();
    openLoginWithFacebook();
});

function openPage() {
    it('should open page', async () => {
        const driver = getDriver();
        await driver.get('https://9gag.com/');
    });

    closePopup();
}

function closePopup() {
    it('should close popup', async () => {
        const driver = getDriver();
        await driver.sleep(100);
        await driver.findElement(By.className('intro_acceptAll--23PPA')).click();
        await driver.sleep(100);
    });
}

function openLoginWithFacebook() {
    it('should open login with Facebook', async () => {
        const driver = getDriver();
        await driver.findElement(By.id('jsid-signup-button')).click();
        await driver.findElement(By.css('.btn-connect-option.facebook')).click();
    });
}
