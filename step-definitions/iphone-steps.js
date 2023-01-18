module.exports = function () {

    this.Given('I click on apple website', function () {
        return helpers.loadPage(page.iphone.appleurl);
    });
    this.When(/^I press on the "([^"]*)"$/, function (objectKey) {
        return page.iphone.clickElement(objectKey);
    });    
    this.Then(/^I am able to see many "([^"]*)"$/, function(objectKey) {
        return page.iphone.elementExists(objectKey) 
    });
};