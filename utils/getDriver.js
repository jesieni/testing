require('chromedriver');

const {Builder} = require('selenium-webdriver');

let driver = null;

before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

after(async () => {
    await driver.quit();
});

module.exports = function getDriver () {
    return driver;
};
