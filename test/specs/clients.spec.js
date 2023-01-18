const ClientPage = require('../pageobjects/examples/Client.Page');
const LoginPage = require('../pageobjects/examples/LoginPage')

describe('Clients test', () => {
    beforeEach( async() => {
        await browser.url(browser.options.baseUrl + 'login');
        //await LoginPage.open();
        await LoginPage.doLogin();
        //await ClientPage.open();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should create new client', async() => {
    //  уже тут шаги открытия формы клиента и заполнения 
    // первый способ
       // await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.createClientsButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия");
        await ClientPage.firstnameField.setValue("Тестовое имя");
        await ClientPage.middlenameField.setValue("Тестовое отчество");
        await ClientPage.maleGenderRadio.click();
        await ClientPage.emailField.setValue("test@mail.ru");
        await ClientPage.phoneField.setValue("996777888999");
        await ClientPage.birthField.setValue("25/12/1998");

        await ClientPage.fillChild();
        await ClientPage.saveButton.click();
        await browser.acceptAlert();
})

    it('remain test cases', async () => {
    xit('remain test cases', async () => {

    })

})
})