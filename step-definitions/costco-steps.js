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
   
   this.When(/^I see Click on "([^"]*)"$/, function (objectKey) {
  // this.When(/I see Click on Register$/,function(objectKey) {
        return page.costco.clickElement(objectKey);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
      //  this.Then(/I should see SignIn$/, function (objectKey) {  
    return page.costco.elementExists(objectKey);
    });

};