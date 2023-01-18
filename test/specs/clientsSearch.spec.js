const ClientPage = require('../pageobjects/examples/Client.Page');
const LoginPage = require('../pageobjects/examples/LoginPage')

describe('Clients test', () => {
    beforeEach( async() => {
        await browser.url('http://167.114.201.175:5000/login');  
        await LoginPage.doLogin();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })
   
    it('should open Search: cc Filter', async ()=> {
        await browser.pause(10000);
        //await ClientPage.createClientButton.waitForDisplayed({ timeout: 15000 });
        await ClientPage.openSearch.click();
        await ClientPage.ccSelect.click();
        let firstButton = await ClientPage.ccAllOption.getText()
        let secondButton = await ClientPage.ccUpTo5000Option.getText()
        let thirdButton = await ClientPage.cc5001To15000Option.getText()
        let fourthButton = await ClientPage.cc15001To50000Option.getText()
        let fifthButton = await ClientPage.cc150001PlusOption.getText()
        let sixthButton = await ClientPage.ccRangeOption.getText()
        await expect(firstButton).toHaveTextContaining('до 5000 сом')
        await expect(secondButton).toHaveTextContaining('5001-15000 сом')
        await expect(thirdButton).toHaveTextContaining('15001-50000 сом')
        await expect(fourthButton).toHaveTextContaining('50001-15000 сом')
        await expect(fifthButton).toHaveTextContaining('150001+ сом')
        await expect(sixthButton).toHaveTextContaining('от 0 до 3000 сом')
        await browser.pause(10000);
            })


    // it('should open Search: Child Filter', async ()=> {
    //     await browser.pause(10000);
    //     //await ClientPage.createClientButton.waitForDisplayed({ timeout: 15000 });
    //     await ClientPage.openSearch.click();
    //     await ClientPage.childSelect.click();
    //     let firstButton = await ClientPage.childAllOption.getText()
    //     let secondButton = await ClientPage.childYesOption.getText()
    //     let thirdButton = await ClientPage.childNoOption.getText()
    //     let fourthButton = await ClientPage.childRangeOption.getText()
    //     await expect(firstButton).toHaveTextContaining('Все')
    //     await expect(secondButton).toHaveTextContaining('Есть')
    //     await expect(thirdButton).toHaveTextContaining('Нет')
    //     await expect(fourthButton).toHaveTextContaining('Дети возрастом от 1 до 15 лет')
    //     await browser.pause(10000);
    //         })
        
// it('should open Search: Gender Filter', async ()=> {
            //     await browser.pause(10000);
            //     await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
            //     await ClientPage.openFirstClientDetails.click();
            //     await ClientPage.editModalPage.waitForDisplayed({ timeout: 10000 });
            //     await ClientPage.editSurnameField.clearValue();
            //     await ClientPage.editSurnameField.setValue('NEW SRUNAME')
            //     await ClientPage.openSearch.click();
            //     await ClientPage.genderSelect.click();
            //     let filterText = await ClientPage.ageAllOption.getText()
            //     let filterText1 = await ClientPage.age18To23Option.getText()
            //     let filterText2 = await ClientPage.age24To31Option.getText()
            //     await expect(filterText).toHaveTextContaining('Все')
            //     await expect(filterText1).toHaveTextContaining('18-23')
            //     await expect(filterText1).toHaveTextContaining('24-31')
            //     await browser.pause(10000);
            //})
        
    
    
            afterEach('Clear browser', async()=>{
                await browser.reloadSession();
            })
    // xit('should create new client', async() => {
    //     await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
    //     await ClientPage.openSearch.click();
    //     await browser.pause(5000);

    // })

})

