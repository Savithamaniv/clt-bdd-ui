const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    appleurl: 'https://www.apple.com/',
        elements: {
         Mac1: '/html/body/nav[1]/div/ul[2]/li[3]/a', 
         AppleProducts: '/html/body/nav[2]/div/ul',
         Macmini: '/html/body/nav[2]/div/ul/li[4]/a/span[2]',
         OrderNow: '/html/body/nav[2]/div/div[2]/div[2]/div[2]/div[2]/a',
    },
    clickElement: async function(Mac1) {
        // eslint-disable-next-line no-console
        var selector1 = page.iphone.elements[Mac1];
        //console.log('test'+selector1);
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector1)).click();
    },
    elementExists: async function(AppleProducts) {
        // eslint-disable-next-line no-console
        var selector2 = page.iphone.elements[AppleProducts];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector2));
    },
    clickElement: async function(Macmini) {
        // eslint-disable-next-line no-console
        var selector3 = page.iphone.elements[Macmini];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector3)).click();
    },
    elementExists: async function(OrderNow) {
        // eslint-disable-next-line no-console
        var selector4 = page.iphone.elements[OrderNow];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector4));
    },
};