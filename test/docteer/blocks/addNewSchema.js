const goToSettings = require('./goToSettings');
const clickAddSchemaButton = require('./clickAddSchemaButton');
const changeSchemaName = require('./changeSchemaName');
const changeFieldType = require('./changeFieldType');
const addNewField = require('./addNewField');
const changeFieldName = require('./changeFieldName');
const saveNewSchema = require('./saveNewSchema');
const waitForToast = require('./waitForToast');

module.exports = function addNewSchema(index, schemaName, fieldIndex, fieldName){
    goToSettings();
    clickAddSchemaButton();
    changeSchemaName(index, schemaName);
    changeFieldType(schemaName, 'name', 'textarea');
    addNewField(schemaName);
    changeFieldName(schemaName, fieldIndex, fieldName);
    changeFieldType(schemaName, fieldName, 'ol');
    saveNewSchema();
    waitForToast('Saving...');
    waitForToast('Saved.')
};