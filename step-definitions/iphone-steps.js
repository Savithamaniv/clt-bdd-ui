module.exports = function () {

    this.Given('II click on apple website', function () {
        return helpers.loadPage(page.iphone.appleurl);
    });

    this.When(/^I click on the "Mac"$/, function (objectKey) {
        return page.iphone.clickElement(objectKey);
    });
    this.Then(/^I am able to see many apple products$/,function(){
        return helpers.loadPage(page.iphone.Appleprod);
    })
};