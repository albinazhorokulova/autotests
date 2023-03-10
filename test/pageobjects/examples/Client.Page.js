class ClientPage {
    get createClientsButton() {return $('button.clients-add-user-dialog') }


    get surnameField() {return $('input[formcontrolname="userSurname"]')}
    get firstnameField() {return $('input[formcontrolname="userName"]')}
    get middlenameField() {return $('input[formcontrolname="userMiddleName"]')}
    get maleGenderRadio() {return $("mat-radio-group div.mat-radio-label-content")} //mat-radio-group mat-radio-button:nth-child(1) div.mat-radio-label-content прокликает женский
    get emailField() {return $('input[type="email"]')}
    get phoneField() {return $('input[formcontrolname="phone"]')}
    get professionSelect() {return $('mat-select div.mat-select-arrow-wrapper')}
    get birthField() {return $('input[formcontrolname="birthday"]')}
    get saveButton() { return $('button[name="save"]')}

    get openChildrenModalPageButton() {return $('div.add-user-children span i')}
    get childModalPage() {return $('mat-dialog-container app-children-dialog')}
    get childModalPageAddChildOption() {return this.childModalPage.$('button.mat-raised-button')}
    get childEnterRow() { return this.childsModalPage.$('div.crm-row')}
    get childNameField() { return this.childEnterRow.$('input[formcontrolname="Name"]')}
    get childBirthDateField() { return this.childEnterRow.$('input[formcontrolname="Birthday"]')}
    get childGenderSelect() { return this.childEnterRow.$('mat-select')}
    get childGenderSelectOption() { return $('//mat-option/span[contains(text(),"М")]')}
    get addChild() { return this.childsModalPage.$('//mat-dialog-actions/button[contains(text(),"Сохранить")]')}

    get openSearch() {return $('form.search-form input')}
    get ageSelect() { return $('app-client-age-filter div.age')}
    get genderSelect() { return $('app-client-sex-filter div.gender')}

    //#region 
    get ageAllOption() {return $('app-client-age-filter div[class="option-wrap"] div:first-child')}
    get age18To23Option() {return $('app-client-age-filter div[class="option-wrap"] div:first-child')}
    get age24To31Option() {return $('app-client-age-filter div[class="option-wrap"] div:first-child')}

    //#endregion

    get childSelect() {return $('app-client-child-filter div.age')}
    
     //#region 
     get childAllOption() {return $('app-client-child-filter div[class="option-wrap"]')}
     get childYesOption() {return $('app-client-child-filter div[class="option-wrap"]')}
     get childNoOption() {return $('app-client-child-filter div[class="option-wrap"]')}
     //#endregion
    
     get ccSelect() {return $('app-client-total-check-filter div.ac')}
    
     //#region 
     get ccAllOption() {return $('app-client-total-check-filter div[class="option ac all select"]')}
     get ccUpTo5000Option() {return $('app-client-total-check-filter div[class="option ac identified"]')}
     get cc5001To15000Option() {return $('app-client-total-check-filter div[class="option ac identified"]')}
     get cc15001To50000Option() {return $('app-client-total-check-filter div[class="option ac identified"]')}
     get cc150001PlusOption() {return $('app-client-total-check-filter div[class="option ac maximum"]')}
     //#endregion
 

   
    async fillChild(childName="Phillip", birthdate="05/06/2000"){
        await this.openChildModalPageButton.click();
        await this.childsModalPageAddChildOption.click();
        await this.childNameField.setValue(childName);
        await this.childBirthDateField.setValue(birthdate)
        await this.childGenderSelect.click();
        await this.childGenderSelectOption.click();
        await this.addChild.click();
    }
async open(){
    await browser.url(browser.options.baseUrl + 'clients');
}
}
module.exports = new ClientPage(); 




// второй способ    
    //async fillForm(testingUser){
    //     await (await this.surnameField).setValue(testingUser.surname)
    //  дописать async browser.url(browser.options.baseUrl + 'login');
