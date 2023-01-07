Feature: As a Courseera user,I should  be able to navigate to Coursera homepage
@Courseera @Explore
Scenario: Coursera home page is displayed with Learn Without Limits message
Given I Click on the website in the browser
When I see the home page with Coursera header
And I click on Explore List button
When I clicked on Take a free course button
Then I can see the courses.

@Coursera @Login
Scenario: Coursera home page is displayed with login button on top of the page
Given I Click on the website in the browser
When I see the home page with Coursera header
And login button on the top of the page
When I click login button 
Then Welcome back page is loaded

@Coursera @Login
Scenario: Coursera home page is displayed with login button on top of the page
Given I Click on the website in the browser
When I see the home page with Coursera header
And login button on the top of the page
When I click login button 
And Welcome back page is loaded
Then Enter email address
And enter password
Then click login button
