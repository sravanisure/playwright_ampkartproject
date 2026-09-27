export class loginpage{
    
    constructor(page){
    this.page = page;

    this.loginpage =page.locator("//h1[normalize-space()='Login']");
    this.loginpageemail = page.getByRole('textbox', { name: 'Mobile number or Email' });
    this.continueButtonLocator = page.getByRole('button', { name: 'Continue' });
    this.otpinput = page.getByText('If an eligible customer account exists, a login code will be sent.', { exact: true });
}

async clickLoginLink(){
    const loginLink = this.page.getByRole('link', { name: /Login/i }).first();
    await loginLink.waitFor({state: 'visible', timeout: 15000});
    await loginLink.click();
}
    
async validateLoginPage(){
    await this.loginpage.waitFor({state: 'visible',timeout: 15000});
    await this.loginpage.click();
}

async entermobileNumber(){
    await this.loginpageemail.waitFor({state: 'visible',timeout: 15000});
    await this.loginpageemail.fill('9876543210');
    return this.loginpageemail;
}

async continuebutton(){
    await this.continueButtonLocator.waitFor({state: 'visible',timeout: 15000});
    await this.continueButtonLocator.click();
    await this.otpinput.waitFor({state: 'visible',timeout: 30000});
}

async validateOTPPopup(){
    await this.otpinput.waitFor({state: 'visible',timeout: 15000});
    return this.otpinput;   
}

}