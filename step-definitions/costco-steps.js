//const { assert } = require("chai");
//const helpers = require("../runtime/helpers");
//const defineSupportCode = require('cucumber').defineSupportCode;
/*
module.exports = function () {

    //Given I am on the "costco" portal


    this.Given(/I am on the costco portal$/, function () {
        return helpers.loadPage(page.costco.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
         return page.costco.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
        return page.costco.elementExists(objectKey) 
    });
};
*/

module.exports =  function ()
{   
    this.Given(/^I am on the costco portal$/, function () {
        return helpers.loadPage(page.costco.url);
    });   
   this.When(/^I presson "([^"]*)"$/, function (objectKey) {
        return page.costco.clickElement(objectKey);
    });
    this.Then(/^I must see "([^"]*)"$/, function (objectKey) {
    return page.costco.elementExists(objectKey);
    });

    this.When(/^I enter the email and password in the form fields$/, async function (table) {
        const fields = table.rows();
        console.log(fields);
        for (i = 0; i < fields.length; i++) {
            console.log(page.costco.inputElement(fields[i][0], fields[i][1]));
        };
        await driver.sleep(3000);
        return;
    });


};