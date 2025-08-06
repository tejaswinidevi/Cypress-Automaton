const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const log4js = require('log4js');
log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %m'
      }
    },
    file: {
      type: 'file',
      filename: 'cypress/logs/test-execution.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] [%c] %m',
        tokens: {
          timestamp: Date.now()
        }
      },
      flags: 'w'  // This will overwrite the file on each run
    }
  },
  categories: {
    default: {
      appenders: ['console', 'file'],
      level: 'info'
    }
  }
});
const logger = log4js.getLogger();

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  await addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)]
    })
  );

  // Enable logging to file
  on('task', {
    log({ level, message }) {
      switch (level) {
        case 'info':
          logger.info(message);
          break;
        case 'error':
          logger.error(message);
          break;
        case 'warn':
          logger.warn(message);
          break;
        case 'debug':
          logger.debug(message);
          break;
        default:
          logger.info(message);
      }
      return null;
    }
  });

  return config;
} 

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/json',
      overwrite: false,
      html: false,
      json: true,
      consoleReporter: 'spec',
      code: true,
      reportTitle: 'Cypress Test Results'
    },
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents
  },
});