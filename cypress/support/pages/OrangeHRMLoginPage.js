import { LoginSelectors } from '../selectors/orangeHRMLoginSelectors';
import logger from '../utils/Logger';

class LoginPage {
    constructor() {
        this.logger = logger;
    }

    // Page actions
    visit() {
        this.logger.info('Navigating to OrangeHRM login page');
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        this.logger.info('Successfully loaded OrangeHRM login page');
    }

    login(username, password) {
        this.logger.info(`Attempting to login with username: ${username}`);
        if(username != ''){
            cy.get(LoginSelectors.USERNAME_INPUT).type(username);
        }if(password != ''){
            cy.get(LoginSelectors.PASSWORD_INPUT).type(password);
        }
        this.logger.info('Credentials entered');
    }

    submit() {
        cy.get(LoginSelectors.LOGIN_BUTTON).click();
        this.logger.info(`Submitted login credentials`);
    }

    verifyTitle(expectedTitle) {
        this.logger.info(`Verifying page title matches: ${expectedTitle}`);
        cy.title().should('eq', expectedTitle);
        this.logger.info('Title verification successful');
    }

    alertMessage(expectedAlert) {
        this.logger.info(`Verifying alert message: ${expectedAlert}`);
        cy.contains("p", expectedAlert).should('be.visible');
        this.logger.info('Alert message verification successful');
    }

    verifyRequiredFieldMessage(errorMsg, field) {
        this.logger.info(`Verifying required field message: ${errorMsg} for field: ${field}`);
        if(field === 'username'){
            cy.get('form > div:nth-of-type(1)').contains("span", errorMsg).should('be.visible');
        }else if(field === 'password'){
            cy.get('form > div:nth-of-type(2)').contains("span", errorMsg).should('be.visible');
        }else if(field === 'both'){
            cy.get('form > div:nth-of-type(1)').contains("span", errorMsg).should('be.visible');
            cy.get('form > div:nth-of-type(2)').contains("span", errorMsg).should('be.visible');
        }
        this.logger.info('Required field message verification successful');

    }
}
export default new LoginPage();
