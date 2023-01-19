Feature: As a costco customer, I want to be able to navigate to login page so that i can shop the products

@costso @runit
  Scenario: Customer is displayed with costco home page
    Given I am on the costco portal
    When I presson "Register"
    Then I must see "SignIn"
    
    @costco @csign
    Scenario: Customer is displayed with costco page and tries to login the portal
        Given I am on the costco portal
        When I presson "Register"
        And I must see "SignIn"
        And I enter the email and password in the form fields
            | inputName  | inputValue        |
            | signInName | ddfhgc@test.com |
            | password   | dsgsgs        |
        And I presson "SigninBtn"
        Then I must see "ErrorMessage"
