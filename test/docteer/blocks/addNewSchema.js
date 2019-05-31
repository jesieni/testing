const goToSettings = require('./goToSettings');
const clickAddSchemaButton = require('./clickAddSchemaButton');
const changeSchemaName = require('./changeSchemaName');
const changeFieldType = require('./changeFieldType');
const addNewField = require('./addNewField');
const changeFieldName = require('./changeFieldName');

module.exports = function addNewSchema(index, schemaName, fieldName){
    goToSettings();
    clickAddSchemaButton();
    changeSchemaName(index, schemaName);
    changeFieldType(schemaName, 'name', 'textarea');
    addNewField(schemaName);
    changeFieldName(schemaName, 2, fieldName);
    changeFieldType(schemaName, fieldName, 'ol');
}