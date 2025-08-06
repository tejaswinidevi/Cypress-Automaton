// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import Logger from './utils/Logger'
import 'cypress-mochawesome-reporter/register';

// Log test run start
before(() => {
    Logger.info('Starting test execution');
});

// Log test run end
after(() => {
    Logger.info('Test execution completed');
});

// Log before each test
beforeEach(() => {
    Logger.info(`Starting test: ${Cypress.currentTest.title}`);
});

// Log after each test
afterEach(() => {
    Logger.info(`Completed test: ${Cypress.currentTest.title} with status: ${Cypress.currentTest.state}`);
});
