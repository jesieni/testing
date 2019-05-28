const faker = require('faker');
const signUp = require('./blocks/signUp');
const signUpExistingUser = require('./blocks/signUpExistingUser');
const logOut = require('./blocks/logOut');
const logIn = require('./blocks/logIn');
const invalidLogIn = require('./blocks/invalidLogIn');
const createNote = require('./blocks/createNote');
const editNote = require('./blocks/editNote');
const cloneNote = require('./blocks/cloneNote');
const deleteNote = require('./blocks/removeNote');
const refreshPage = require('./blocks/refreshPage');
const createAndRemoveNote = require('./blocks/createAndRemoveNote');
const checkIfNameMatches = require('./blocks/checkIfNameMatches');
const changePassword = require('./blocks/changePassword');
const invalidChangePassword = require('./blocks/invalidChangePassword');
const {Key} = require('selenium-webdriver');

describe('docteer.com', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const wrongPassword = 'x' + password;
    const temporaryPassword = faker.internet.password();

    describe('signUp', () => {
        signUp(email, password);
        logOut();
    });

    describe('signUpExistingUser', () => {
        signUpExistingUser(email, password);
    });

    describe('invalidLogIn', () => {
        const wrongEmail = 'x' + email;
        invalidLogIn(email, wrongPassword);
        invalidLogIn(wrongEmail, password);
        invalidLogIn(wrongEmail, wrongPassword);
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

    describe('logIn, createNote and checkIfNameMatches', () => {
        logIn(email, password);
        createNote({
            Name: 'Masło.',
            Labels: ['masło', Key.RETURN, 'krowa'],
            Text: 'Kanapka z masłem.'
        });
        createNote({
            Name: 'Masłem.',
            Labels: ['masło', Key.RETURN, 'krowa'],
            Text: 'Kanapka z masłem.'
        });
        checkIfNameMatches('Masło.');
        logOut();
    });

    describe('logIn and changePassword', () => {
        logIn(email, password);
        changePassword(password, temporaryPassword);
        changePassword(temporaryPassword, password);
        logOut();
    });

    describe('logIn and invalidChangePassword', () => {
        logIn(email, password);
        invalidChangePassword(password, temporaryPassword, wrongPassword);
        logOut();
    });
});
