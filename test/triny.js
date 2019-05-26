const {By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

const getDriver = require('../utils/getDriver');
const isPresent = require('../utils/isPresent');

describe('triny.pl', () => {
    describe('search with no results', () => {
        openPage();
        searchFor('kjdiak');
        checkIfThereAreNoResults();
    });

    describe('search with results', () => {
        openPage();
        searchFor('szampon');
        checkIfThereAreResults();
        goToLastPage();
        addAnyToBasketIfPossible();
        goToBasket();
    });
});

function openPage() {
    it('should open the page', async () => {
        const driver = getDriver();
        await driver.get('https://triny.pl/');
    });
}

function searchFor(searchTerm) {
    it('should search for ' + searchTerm, async () => {
        const driver = getDriver();
        await driver.findElement(By.css('#searchbox_inner .search_query')).click();
        await driver.wait(until.elementIsEnabled(driver.findElement(By.css('#searchbox_inner .search_query'))));
        await driver.findElement(By.css('#searchbox_inner .search_query')).sendKeys(searchTerm, Key.RETURN);
    });
}

function checkIfThereAreNoResults() {
    it('should check if there are no results', async () => {
        const driver = getDriver();
        const noResults = await noResultsFound(driver);
        expect(noResults).to.be.true;
    });
}

function checkIfThereAreResults() {
    it('should check if there are results', async () => {
        const driver = getDriver();
        const noResults = await noResultsFound(driver);
        expect(noResults).to.be.false;
    });
}

async function noResultsFound(driver) {
    const isAlertPresent = await isPresent(driver, By.css('.warning'));
    return isAlertPresent;
}

function goToNextPageIfPossible() {
    it('should go to next page if possible', async () => {
        const driver = getDriver();
        const paginatorLocator = By.css('.c-pagination-list :last-child a');
        const isPaginatorPresent = await isPresent(driver, paginatorLocator);
        if (isPaginatorPresent)
            await driver.findElement(paginatorLocator).click();
    });
}

function goToLastPageIter() {
    it('should go to last page if possible', async () => {
        const driver = getDriver();
        const paginatorLocator = By.css('.c-pagination-list :last-child a');
        let isPaginatorPresent = await isPresent(driver, paginatorLocator);
        while (isPaginatorPresent) {
            await driver.findElement(paginatorLocator).click();
            isPaginatorPresent = await isPresent(driver, paginatorLocator);
        }
    });
}

function goToLastPage() {
    it('should go to last page if possible', async () => {
        const driver = getDriver();
        await goToLastPageRec(driver);
    });
}

async function goToLastPageRec(driver) {
    const paginatorLocator = By.css('.c-pagination-list :last-child a');
    const isPaginatorPresent = await isPresent(driver, paginatorLocator);
    if (isPaginatorPresent) {
        await driver.findElement(paginatorLocator).click();
        await goToLastPageRec(driver);
    }
}

function addAnyToBasketIfPossible() {
    it('should add an item into the basket if possible', async () => {
        const driver = getDriver();
        const anyProductLocator = By.css('.pro_first_box .product_img_link');
        const isAnyProductPresent = await isPresent(driver, anyProductLocator);
        if (isAnyProductPresent)
            await driver.findElement(anyProductLocator).click();
        const isProductInStock = await isPresent(driver, By.css('.c-product-action.js-product-action'));
        if (isProductInStock)
            await driver.findElement(By.css('#add_to_cart_wrapper #add_to_cart')).click();
    });
}

function goToBasket() {
    it('should go to basket summary', async () => {
        const driver = getDriver();
        await driver.findElement(By.css('.c-cart-actions .cart .c-cart')).click();
    });
}