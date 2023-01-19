const { assert } = require("chai");
const helpers = require("../runtime/helpers");
const defineSupportCode = require('cucumber').defineSupportCode;


module.exports = {

    url: 'https://www.costco.com/',

   elements: {
     
        SignIn:'/html/body/div[2]/main/div/h1',
        Register:' /html/body/header/div[2]/div/div/div/div[2]/div/div[4]/nav/ul/li[2]/a',
        SigninBtn: '/html/body/div[2]/main/div/div[1]/form/div[3]/div[5]/button',
        
        SignInName: by.id('SignInName'),
        Password: by.id('Password'),
        UsernameVal: 'ddfhgc@test.com',
        PasswordVal: 'dsgsgs',
       // errorMessage: '//*[@id="The email address and/or password you entered are invalid."]',
       ErrorMessage:  '/html/body/div[2]/main/div/div[1]/form/div[2]/p',
    },
     elementExists: async function(objectKey) {
        var selector1 = page.costco.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector1));
    },
    clickElement: async function(Register) {
        var selector2 = page.costco.elements[Register]; 
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector2)).click();
    },
    /*clickElement: async function(SigninBtn){
        var sel1 = page.costco.elements[SigninBtn];
        await driver.sleep(2000);
        return driver.clickElement(By.xpath(sel1)).click();
    },
    */
    inputUserName: async function(val) {
        var selector4 = page.costco.elements['SignInName']; 
        await driver.sleep(2000);
        return driver.findElement(selector4).sendKeys(val);
    },
    inputPassword: async function(val) {
        var selector5 = page.costco.elements['Password']; 
        await driver.sleep(2000);
        return driver.findElement(selector5).sendKeys(val);
    },
    inputElement: async function(name,val) {
        var selector6 = page.costco.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(selector6).sendKeys(val);

    },
    loginPortal: async function(user,pass) {
        await helpers.loadPage(page.costco.url);
        await this.clickElement('Register')
        await this.inputUserName(user);
        await this.inputPassword(pass);
        await this.clickElement('SigninBtn');
        await driver.sleep(2000); 
        return;
    },
};