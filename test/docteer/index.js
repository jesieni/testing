const faker = require('faker');
const signUp = require('./blocks/signUp');
const logOut = require('./blocks/logOut');
const logIn = require('./blocks/logIn');
const createNote = require('./blocks/createNote');
const editNote = require('./blocks/editNote');
const cloneNote = require('./blocks/cloneNote');
const deleteNote = require('./blocks/removeNote');
const refreshPage = require('./blocks/refreshPage');
const createAndRemoveNote = require('./blocks/createAndRemoveNote');
const changePassword = require('./blocks/changePassword');
const {Key} = require('selenium-webdriver');

describe('docteer.com', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    describe('signUp', () => {
        signUp(email, password);
        logOut();
    });

    describe('logIn and createNote', () => {
        logIn(email, password);
        createNote({
            Name: 'O kotku',
            Labels: ['kot', Key.RETURN, 'cicik'],
            Text: 'Kotek zjadł i poszedł spać. Dzielny kotek. Dużo zjadł.'
        });
        logOut();
    });

    describe('logIn and editNote', () => {
        logIn(email, password);
        editNote(1, {
            Name: [Key.chord(Key.CONTROL, 'a'), 'O kotku psotku'],
            Text: [Key.chord(Key.CONTROL, 'a'), 'Kotek zjadł i poszedł spać. Dzielny kotek. Dużo zjadł.']
        });
        refreshPage();
        logOut();
    });

    describe('logIn and cloneNote', () => {
        logIn(email, password);
        cloneNote(1);
        logOut();
    });

    describe('logIn and deleteNote', () => {
        logIn(email, password);
        deleteNote(1);
        logOut();
    });

    describe('logIn and createAndRemoveNote', () => {
        logIn(email, password);
        createAndRemoveNote({
            Name: 'O kotku',
            Labels: ['kot', Key.RETURN, 'cicik'],
            Text: 'Kotek zjadł i poszedł spać. Dzielny kotek. Dużo zjadł.'
        });
        logOut();
    });

    describe('logIn and changePassword', () => {
        const temporaryPassword = faker.internet.password();
        logIn(email, password);
        changePassword(password, temporaryPassword);
        changePassword(temporaryPassword, password);
        logOut();
    });
});
