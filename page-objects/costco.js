const { assert } = require("chai");
const helpers = require("../runtime/helpers");
const defineSupportCode = require('cucumber').defineSupportCode;


module.exports = {

    url: 'https://www.costco.com/',

   elements: {
     
        SignIn:'/html/body/div[2]/main/div/h1',
        Register:' /html/body/header/div[2]/div/div/div/div[2]/div/div[4]/nav/ul/li[2]/a',
        //OrdersAndReturns : '/html/body/header/div[2]/div/div/div/div[2]/div/div[4]/nav/ul/li[3]/a'

    },
     elementExists: async function(objectKey) {
        var selector = page.costco.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },
    clickElement: async function(objectKey) {
        var selector = page.costco.elements[objectKey]; 
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)).click();
    },
    /*clickElement: async function(objectKey){
        var sel1 = page.costco.elements[objectKey];
        await driver.sleep(1000);
        return driver.clickElement(By.xpath(sel1)).click();
    },*/
};