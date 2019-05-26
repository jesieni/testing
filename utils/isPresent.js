module.exports = async function isPresent(driver, locator) {
    const foundElements = await driver.findElements(locator);
    return foundElements.length > 0;
};
