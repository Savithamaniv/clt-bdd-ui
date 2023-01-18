const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    appleurl: 'https://www.apple.com/',
    Appleprod: '/html/body/nav[2]/div/div/button[1]',

    elements: {
        
        Mac: '/html/body/nav[1]/div/ul[2]/li[3]/a', 
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.iphone.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.iphone.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },
};