Feature: As a iPhone customer, I want to able login the page and do shopping MAc

@Iphones @Mac
Scenario: Mac Book shopping on Apple website
Given I click on apple website 
When I press on the "Mac1" 
Then I am able to see many "AppleProducts"

@Iphone @Macmini
Scenario: Know about Macmini on Apple website
Given I click on apple website 
When I press on the "Mac1" 
When I click on the "Macmini"
Then I see the "OrderNow" button
