class Logger {
    info(message) {
        cy.log(`[INFO] ${message}`);
        cy.task('log', { level: 'info', message }, { log: false });
    }

    error(message) {
        cy.log(`[ERROR] ${message}`);
        cy.task('log', { level: 'error', message }, { log: false });
    }

    warning(message) {
        cy.log(`[WARNING] ${message}`);
        cy.task('log', { level: 'warn', message }, { log: false });
    }

    debug(message) {
        cy.log(`[DEBUG] ${message}`);
        cy.task('log', { level: 'debug', message }, { log: false });
    }
}

// Export a singleton instance
export default new Logger();
