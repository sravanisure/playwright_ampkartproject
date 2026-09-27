export class BrandPage {

    constructor(page) {
        this.page = page;

        this.brandDropdown = page.getByRole('button', { name: 'Brands', exact: true });
        this.brandDropdownOption = page.locator(
            '.shop-nav-tree__link[href*="/brands/honeywell"]'
        );
        this.brandHeading = page.locator("//h1[normalize-space()='Honeywell']");
    }

    async clickBrandLink() {
        await this.brandDropdown.waitFor({ state: 'visible', timeout: 15000 });
        await this.brandDropdown.click();

        await this.brandDropdownOption.waitFor({ state: 'visible', timeout: 15000 });
        await this.brandDropdownOption.click({ noWaitAfter: true });
    }

    async validateBrandHeading() {
        await this.brandHeading.waitFor({ state: 'visible', timeout: 15000 });
        return this.brandHeading;
    }

    async clickBrandAddButton() {
        const brandaddbutton = this.page.locator("(//span[text()='Add'])[last()]");
        await brandaddbutton.waitFor({ state: 'visible', timeout: 15000 });
        await brandaddbutton.click();
        return brandaddbutton;
    }

    async clickBrandCartButton() {
        const brandcartButton = this.page.getByRole('link', { name: /Cart has items|Cart/i }).first();
        await brandcartButton.waitFor({ state: 'visible', timeout: 15000 });
        await brandcartButton.click();
        await this.page.waitForURL(/\/cart(?:\/|$)/, { timeout: 15000 }).catch(() => {});
        return brandcartButton;
    }

    async checkBrandAddToCartProduct() {
        const cartPage = this.page.locator('main').first();
        await cartPage.waitFor({ state: 'visible', timeout: 30000 });
        return cartPage;
    }

    async clickBrands() {
        return this.clickBrandLink();
    }

    async selectbrand() {
        return this.clickBrandLink();
    }

    async validatebrandHeading() {
        return this.validateBrandHeading();
    }

    async clickbrandAddButton() {
        return this.clickBrandAddButton();
    }

    async clickbrandsCartButton() {
        return this.clickBrandCartButton();
    }

    async checkbrandAddToCartProduct() {
        return this.checkBrandAddToCartProduct();
    }
}