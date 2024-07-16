Feature: Login

Scenario Outline: Validating the Login page of HRM

Given open the browser and enter url

When enter username as <username>

And enter password as <password>

And click on submit

Then Login should be successful

Example: 
    | username| password  |
    | ADmin   | Admin123  |
    | admin   | passs     |
    | Admin   | admin123  |
    | admin   | Admin123  |
    |         |           |

