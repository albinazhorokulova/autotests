
const LoginPage = require('../pageobjects/examples/LoginPage');

describe('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() => {

    })

    it('should login', async () => {
        // navigate to a new URL
        await browser.url('http://167.114.201.175:5000/login');  
        // receive url
        // console.log(await browser.getUrl()); // outputs: "https://webdriver.io"
        // ввести логин
        await LoginPage.loginField.setValue('Admin');
        await browser.pause(5000);
        // ввести пароль
        await ( await browser.$('input[name="password"]')).setValue('Admin@Navi');
        // войти
        await ( await browser.$('button[type="submit"]')).click();

        //await browser.pause(5000);

        // await expect(browser).toHaveUrl('http://167.114.201.175:5000/clients');

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