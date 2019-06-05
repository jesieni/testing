const openPage = require('./openPage');
const goToLogin = require('./goToLogin');
const switchToSignUp = require('./switchToSignUp');
const typeUserInfo = require('./typeUserInfo');
const waitForToast = require('./waitForToast');
const submitUserInfo = require('./submitUserInfo');
const waitForNoToasts = require('./waitForNoToasts');

module.exports = function signUp(email, password) {
    openPage();
    goToLogin();
    switchToSignUp();
    typeUserInfo(email, password);
    submitUserInfo('signup');
    waitForToast('Signing up...');
    waitForToast('User already exists.');
    waitForNoToasts();
};