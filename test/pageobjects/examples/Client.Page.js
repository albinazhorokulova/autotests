class ClientPage {
    get createClientsButton() {return $('button.clients-add-user-dialog') }


    get surnameField() {return $('input[formcontrolname="userSurname"]')}
    get firstnameField() {return $('input[formcontrolname="userName"]')}
    get middlenameField() {return $('input[formcontrolname="userMiddleName"]')}
    //get genderField() {return $('input[formcontrolname="sex"]')}
    get emailField() {return $('input[formcontrolname="emailName"]')}

    // async fillForm(testingUser){
    //     await (await this.surnameField).setValue(testingUser.surname)
    // }

    //  дописать async browser.url(browser.options.baseUrl + 'login');
}

module.exports = new ClientPage();