const {By, Key, until} = require('selenium-webdriver');

const getDriver = require('../utils/getDriver');
const isPresent = require('../utils/isPresent');

describe('ekopolka.pl', () => {
    openPage();
    searchFor('ksjwsk');
    goToLastPage();
    addAnyToBasketIfPossible();
    goToBasket();
});

function openPage() {
    it('should open the page and close popups', async () => {
        const driver = getDriver();
        await driver.get('https://ekopolka.pl/');

        const isDisplayed = await driver.findElement(By.css('#user_popup')).isDisplayed();
        if (isDisplayed) {
             await driver.findElement(By.css('.user-popup-close')).click();
             await driver.wait(until.elementIsNotVisible(driver.findElement(By.css('#user_popup'))));
        }
        const cookieAlert = await driver.findElement(By.css('#cookie')).isDisplayed();
        if (cookieAlert)
             await driver.findElement(By.css('#cookie .close')).click();
    });
}

function searchFor(searchTerm) {
    it('should search for given keyword', async () => {
        const driver = getDriver();
        await driver.findElement(By.css('[name=search]')).sendKeys(searchTerm, Key.RETURN);
        const noResults = await noResultsFound();
        if (noResults)
            return;
    });
}

function noResultsFound() {
    it('should check if the result are found', async () => {
        const driver = getDriver();
        const isAlertPresent = await isPresent(driver, By.css('.main .centercol .alert'));
        return isAlertPresent;
    });
}

function goToLastPage() {
    it('should go to last page if possible', async () => {
        const driver = getDriver();
        const paginatorLocator = By.css('.innerbox .paginator .last a');
        const isPaginatorPresent = await isPresent(driver, paginatorLocator);
        if (isPaginatorPresent)
            await driver.findElement(paginatorLocator).click();
    });
}

function addAnyToBasketIfPossible() {
    it('should add item to the basket', async () => {
        const driver = getDriver();
        const anyProductLocator = By.css('[data-product-id] .addtobasket');
        const isAnyProductPresent = await isPresent(driver, anyProductLocator);
        if (isAnyProductPresent)
        await driver.findElement(anyProductLocator).click();
    });
}

function goToBasket() {
    it('should go to the basket summary', async () => {
        const driver = getDriver();
        await driver.findElement(By.css('.basket')).click();
    });
}