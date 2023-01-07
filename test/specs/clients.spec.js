const ClientPage = require('../pageobjects/examples/Client.Page');
const LoginPage = require('../pageobjects/examples/LoginPage')

describe('Clients test', () => {
    beforeEach( async() => {
        //await browser.url(browser.options.baseUrl + 'login');
        await LoginPage.open();
        await LoginPage.doLogin();
        await ClientPage.open();
    })

    it('should create new client', async() => {
    //  уже тут шаги открытия формы клиента и заполнения 
    // первый способ
        await ClientPage.createClientsButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия");
        await ClientPage.firstnameField.setValue("Тестовое имя");
        await ClientPage.middlenameField.setValue("Тестовое отчество");
       // await ClientPage.genderField.setValue("");
        await ClientPage.emailField.setValue("test@mail.ru");

        await browser.pause(5000);
    })



})