Feature: As a iPhone customer, I want to able login the page and do shopping MAc

@Iphone @Mac
Scenario: Mac Book shopping on Apple.com website
Given I click on apple.com website 
When I see the header page with Mac option
Then I click on the Mac it leads me to shop multiple Mac items

@Iphone @Macmini
Scenario: Mac Book shopping on Apple.com website
Given I click on apple.com website 
When I see the header page with Mac option
And I see Mac mini option
Then I click on the Macmini I should see shop option
