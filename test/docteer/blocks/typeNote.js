const getDriver = require('../../../utils/getDriver');
const fill = require('../actions/fill');

module.exports = function typeNote(note) {
    it('should type in given note', async () => {
        const driver = getDriver();
        for (const [field, value] of Object.entries(note))
            await fill(driver, '[data-test-note-field="' + field + '"] *', ...value);
    });
};
