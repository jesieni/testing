const goToSettings = require('./goToSettings');
const typeChangePassword = require('./typeChangePassword');
const saveChangePassword = require('./saveChangePassword');
const toggleForm = require('./toggleForm');
const waitForToast = require('./waitForToast');
const waitForNoToasts = require('./waitForNoToasts');

module.exports = function changePassword(password, newpassword) {
    goToSettings();
    toggleForm();
    typeChangePassword(password, newpassword, newpassword);
    saveChangePassword();
    toggleForm();
    waitForToast('Changing password...');
    waitForToast('Changed password.');
    waitForNoToasts();
};