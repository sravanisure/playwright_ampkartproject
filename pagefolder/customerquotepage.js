export class customerQuotePage {
    constructor(page) {
        this.page = page;

        this.quoteHeading = page.locator("//h1[normalize-space()='Build Your Customer Quote']");
        this.nameBusinessInput = page.locator("(//input[@class='form-control'])[3]");
        this.companyInput = page.locator("(//input[@class='form-control'])[4]");
        this.customerNameInput = page.locator("//input[@name='customer_name']");
        this.emailInput = page.locator("//input[@name='customer_email']");
        this.phoneInput = page.locator("//input[@name='customer_phone']");
    }

    async validateQuotePage() {
        await this.quoteHeading.waitFor({ state: 'visible' });
        return this.quoteHeading;
    }

    async fillCustomerDetails() {
        await this.nameBusinessInput.fill('John Doe');
        await this.companyInput.fill('Ampkart Solutions');
        await this.customerNameInput.fill('John Doe');
        await this.emailInput.fill('john.doe@example.com');
        await this.phoneInput.fill('9876543210');
    }
}
