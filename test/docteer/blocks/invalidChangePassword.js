const goToSettings = require('./goToSettings');
const typeChangePassword = require('./typeChangePassword');
const saveChangePassword = require('./saveChangePassword');
const toggleForm = require('./toggleForm');
const waitForToast = require('./waitForToast');
const waitForNoToasts = require('./waitForNoToasts');

module.exports = function invalidChangePassword(password, newpassword, wrongPassword) {
    goToSettings();
    toggleForm();
    typeChangePassword(password, newpassword, wrongPassword);
    saveChangePassword();
    waitForToast('Changing password...');
    waitForToast('Passwords mismatch.');
    waitForNoToasts();
};