Feature: This is about the OrangeHRM login functionality

    Scenario: Login to OrangeHRM successful with valid credentials
        Given user visits the orange HRM demo
        When user enters login credentials
            | username | Admin    |
            | password | admin123 |
        When user submits login credentials
        Then user verifies the login is successful by checking the title "OrangeHRM"

    Scenario Outline: Login to OrangeHRM successful with invalid credentials
        Given user visits the orange HRM demo
        When user enters login credentials
            | username | <user> |
            | password | <pass> |
        When user submits login credentials
        Then user verifies the alert message "Invalid credentials"
        Examples:
            | user  | pass     |
            | Adm   | admin123 |
            | Admin | admin12  |
            | Adm   | admin12  |

    Scenario Outline: Login to OrangeHRM successful with empty credentials
        Given user visits the orange HRM demo
        When user enters login credentials
            | username | <user> |
            | password | <pass> |
        When user submits login credentials
        Then user verifies the error message 'Required' for field <field>

        Examples:
            | user  | pass     | field    |
            |       | admin123 | username |
            | Admin |          | password |
            |       |          | both     |