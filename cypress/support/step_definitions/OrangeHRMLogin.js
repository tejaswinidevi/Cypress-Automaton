import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OrangeHRMLoginPage from '../pages/OrangeHRMLoginPage';

Given("user visits the orange HRM demo", () => {
  OrangeHRMLoginPage.visit();
});

When("user enters login credentials", (dataTable) => {
  const credentials = dataTable.rowsHash();
  OrangeHRMLoginPage.login(credentials.username, credentials.password);
});

When("user submits login credentials", () => {
  OrangeHRMLoginPage.submit();
});

Then('user verifies the login is successful by checking the title {string}', (title) => {
  OrangeHRMLoginPage.verifyTitle(title);
});

Then('user verifies the alert message {string}', (alert) => {
  OrangeHRMLoginPage.alertMessage(alert);
});

Then("user verifies the error message {string} for field {}", (errorMsg, field) => {
  OrangeHRMLoginPage.verifyRequiredFieldMessage(errorMsg, field);
});