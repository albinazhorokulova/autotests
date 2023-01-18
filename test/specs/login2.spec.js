const LoginPage = require('../pageobjects/examples/LoginPage');

describe('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() => {
        await browser.url('http://167.114.201.175:5000/login');  
        await LoginPage.doLogin();
    })

    it('should login', async () => {
        // await LoginPage.loginField.setValue('Admin');
        // await LoginPage.passwordField.setValue('Admin@Navi1');
        // await LoginPage.submitButton.click(); 
        //await expect(browser).toHaveUrl('http://167.114.201.175:5000/clients');
        await browser.pause(10000)
        await browser.$('div[class="mat-input-wrapper mat-form-field-wrapper"]').click();
    
        await LoginPage.clientChildFilter.setValue('option select age');
        await browser.$('//div[@role="button"][text()="option age all""Все"]').click();


        // await browser.$('//div[@role="button"][text()="option age all""Все"]').click();
        // await browser.$('//div[@role="button"][text()="option age all""Есть"]').click();
        // await browser.$('//div[@role="button"][text()="option age all select""Нет"]').click();
        // await browser.$('//div[@role="button"][text()="option age range-double""Возраст детей от 0 до 100"]').click();
//  все есть и нет перевести в expect
        //await browser.$('//span[@role="button"][text()="option wrap platform""Платформы"]').click();

     it('should fail login', async () => {
        await LoginPage.doLogin("Admin", "Invalid password")    
        // await LoginPage.loginField.setValue('Admin');
        // await LoginPage.passwordField.setValue('Admin@Navi1');
        // await LoginPage.submitButton.click();
        await expect(browser).toHaveUrl('http://167.114.201.175:5000/login');
    })
        
     


       
        afterEach('Clear browser', async() =>{
    
        })
     
        //input[name="userName"]
        //input[type="text"]
        //[type="text"]
        //form > div
    })
})