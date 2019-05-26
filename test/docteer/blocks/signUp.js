const openPage = require('./openPage');
const goToLogin = require('./goToLogin');
const switchToSignUp = require('./switchToSignUp');
const typeUserInfo = require('./typeUserInfo');
const waitForToast = require('./waitForToast');
const submitUserInfo = require('./submitUserInfo');

module.exports = function signUp(email, password) {
    openPage();
    goToLogin();
    switchToSignUp();
    typeUserInfo(email, password);
    submitUserInfo('signup');
    waitForToast('Signing up...');
    waitForToast('Signed in.');
    waitForToast('Loading...');
    waitForToast('Loaded.');
};