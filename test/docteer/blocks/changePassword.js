const goToSettings = require('./goToSettings');
const openForm = require('./openForm');
const typeChangePassword = require('./typeChangePassword');
const saveChangePassword = require('./saveChangePassword');
const closeForm = require('./closeForm');
const waitForToast = require('./waitForToast');

module.exports = function changePassword(password, newpassword) {
    goToSettings();
    openForm();
    typeChangePassword(password, newpassword, newpassword);
    saveChangePassword();
    closeForm();
    waitForToast('Changing password...');
    waitForToast('Changed password.');
};