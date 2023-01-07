
const LoginPage = require('../pageobjects/examples/LoginPage');

describe('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() => {

    })

    it('should login', async () => {
        await browser.url('http://167.114.201.175:5000/login');  
        await LoginPage.doLogin();
        await LoginPage.submitButton.click();
        await expect(browser).toHaveUrl('http://167.114.201.175:5000/clients');

     it('should fail login', async () => {
        await LoginPage.doLogin("Admin", "Invalid password")    
        // await LoginPage.loginField.setValue('Admin');
        // await LoginPage.passwordField.setValue('Admin@Navi1');
        // await LoginPage.submitButton.click();
        await expect(browser).toHaveUrl('http://167.114.201.175:5000/login');
    })
        // await ( await browser.$('input[name="search"]')).click();

        // await ( await browser.$('//div["button[text()="option select age""Дети"]')).click();
        // await ( await browser.$('//div[@role="button"][text()="option age all""Все"]')).click();
        // await ( await browser.$('//div[@role="button"][text()="option age all""Есть"]')).click();
        // await ( await browser.$('//div[@role="button"][text()="option age all select""Нет"]')).click();
        // await ( await browser.$('//div[@role="button"][text()="option age range-double""Возраст детей от 0 до 100"]')).click();

        // await ( await browser.$('//span["button[text()="option wrap platform""Платформы"]')).click();
     


       
        afterEach('Clear browser', async() =>{
    
        })
     
        //input[name="userName"]
        //input[type="text"]
        //[type="text"]
        //form > div
    })
})