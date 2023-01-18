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

    it('should create new client', async ()=> {
        it('should open Search: Age Filter', async ()=> {
            await browser.pause(10000);
            await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
            await ClientPage.openSearch.click();
            await ClientPage.ageSelect.click();
            let filterText = await ClientPage.ageAllOption.getText()
            let filterText1 = await ClientPage.age18To23Option.getText()
            let filterText2 = await ClientPage.age24To31Option.getText()
            await expect(filterText).toHaveTextContaining('Все')
            await expect(filterText1).toHaveTextContaining('18-23')
            await expect(filterText2).toHaveTextContaining('24-31')
            await browser.pause(10000);
        })

    it('should create new client', async ()=> {
        it('should open Search: Child Filter', async ()=> {
        await browser.pause(10000);
        await ClientPage.createClientsButton.waitForDisplayed({ timeout: 15000 });
        await ClientPage.openSearch.click();
        await ClientPage.childSelect.click();
        let filterFirst = await ClientPage.childAllOption.getText()
        let filterSecond = await ClientPage.childYesOption.getText()
        let filterThird = await ClientPage.childNoOption.getText()
        await expect(filterFirst).toHaveTextContaining('Все')
        await expect(filterSecond).toHaveTextContaining('Есть')
        await expect(filterThird).toHaveTextContaining('Нет')
        await browser.pause(10000);
        })

    it('should create new client', async ()=> { 
        it('should open Search: cc Filter', async ()=> {
        await browser.pause(10000);
        await ClientPage.createClientsButton.waitForDisplayed({ timeout: 15000 });
        await ClientPage.openSearch.click();
        await ClientPage.ccSelect.waitForDisplayed({ timeout: 15000 });
        await ClientPage.ccSelect.click();
        let filterFirst = await ClientPage.ccAllOption.getText()
        let filterSecond = await ClientPage.ccUpTo5000Option.getText()
        let filterThird = await ClientPage.cc5001To15000Option.getText()
        let filterFourth = await ClientPage.cc15001To50000Option.getText()
        let filterFifth = await ClientPage.cc150001PlusOption.getText()
        await expect(filterFirst).toHaveTextContaining('до 5000 сом')
        await expect(filterSecond).toHaveTextContaining('5001-15000 сом')
        await expect(filterThird).toHaveTextContaining('15001-50000 сом')
        await expect(filterFourth).toHaveTextContaining('50001-15000 сом')
        await expect(filterFifth).toHaveTextContaining('150001+ сом')
        await browser.pause(10000);
        })

        
    
    
            afterEach('Clear browser', async()=>{
                await browser.reloadSession();
            })
    // xit('should create new client', async() => {
    //     await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
    //     await ClientPage.openSearch.click();
    //     await browser.pause(5000);

    // })

})

})
})
})