const openPage = require('./openPage');
const goToLogin = require('./goToLogin');
const typeUserInfo = require('./typeUserInfo');
const submitUserInfo = require('./submitUserInfo');
const waitForToast = require('./waitForToast');

module.exports = function logIn(email, password) {
    openPage();
    goToLogin();
    typeUserInfo(email, password);
    submitUserInfo('login');
    waitForToast('Logging in...');
    waitForToast("Sounds good, doesn't work.");
};