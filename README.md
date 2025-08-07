# OrangeHRM Cypress Automation Demo
This repository contains a Cypress automation project for the OrangeHRM demo website implemented in BDD style using Cucumber. log4js is used for logging and moachawesome is used for reporting

# Features
* Acceptance tests with Cypress-Cucumber Integration
* Page Object Model design pattern
* log4js for logging
* mochawesome for reporting

# Tools Used
* Visual Studio Code for coding
* Git & GitHub for Version Control

# Set Up
* Create a folder named Cypress Automation
* Open the folder in Visual Studio Code
* install npm through homebrew

  ```brew install node```
* Initialize npm

  ```npm init -y```
* Install cypress

  ```npm install cypress --saved-dev```
* Install cypress-cucumber-preprocess for cypress-cucumber integration

  ```npm install @badeball/cypress-cucumber-preprocessor```
* Install cypress esbuild preprocessor

  ```npm install --save-dev @bahmutov/cypress-esbuild-preprocessor```
* Install log4js

  ```npm install log4js```
* Install moachawesome

  ```npm install --save-dev mochawesome```

# Folder Structure
```cypress/
├── e2e/
│   └── FeatureFiles/     # Feature files
└── support/
    ├── e2e.js            # Support file
    └── pages/            # Page object classes
    └── step_definitions/ # Step definitions
    └── selectors/        # CSS Selectors for page objects
    └── utils/            # utility classes
```

# Running Tests
* use the command below to run the tests in browser mode with logging

  ```npx cypress open```
* use the command below to run the tests in headless mode with logging and reporting

  ```npm run test```
* visit mochawesome.html under cypress/reports for html reports

# Page Object Model
* The project follows Page Object Model for better maintainability
* Features files under cypress/e2e/FeatureFiles calls step definitions under cypress/support/step_definitions/
* Step definitions inturn call page object classes under cypress/support/pages/ for performing actions
* Page objects use the element selectors under cypress/support/selectors
