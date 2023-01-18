Feature: As a costco customer, I want to be able to navigate to login page so that i can shop the products

@costso @runit
  Scenario: Customer is displayed with costco home page
    Given I am on the costco portal
    When I click on "Register"
    Then I should see "SignIn"
    #Given I am on the Costco home page
   # When I click on "OrdersAndReturns" Button
   # When I see Click on "Register" option
    #Then I should see "SignIn" button
