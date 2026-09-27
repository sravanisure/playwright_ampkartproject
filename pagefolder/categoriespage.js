export class CategoriesPage {

    constructor(page) {
        this.page = page;

        // Categories dropdown button
       this.categoriesDropdown = page.locator("//button[normalize-space()='Categories']");

        // Circuit Breakers option inside Categories
        this.circuitBreakers = page.locator("(//span[text()='Circuit Breakers'])[1]");

        // View all Accessories / category link
        this.viewAllCircuitBreakers = page.locator("(//a[normalize-space()='View all Circuit Breakers'])[1]");
    }

    // Click Categories dropdown
    async clickCategories() {
        await this.categoriesDropdown.waitFor({state: 'visible',timeout: 15000});
        await this.categoriesDropdown.click();
    }

    // Select Circuit Breakers
    async selectCircuitBreakers() {
        await this.circuitBreakers.waitFor({state: 'visible',timeout: 15000});
        await this.circuitBreakers.click();
    }

    // Click View all Circuit Breakers
    async clickViewAllCircuitBreakers() {
        await this.viewAllCircuitBreakers.waitFor({ state: 'visible', timeout: 15000 });
        await this.viewAllCircuitBreakers.click();
    }

    // Backward-compatible alias for older method names
    async clickViewallCircuitBreakers() {
        return this.clickViewAllCircuitBreakers();
    }

    //click on add button
    async clickcategoriesAddButton() {
        const categoriesaddbutton = this.page.locator("span:visible").filter({ hasText: /^Add$/ }).first();
        await categoriesaddbutton.waitFor({ state: 'visible', timeout: 15000 });
        await categoriesaddbutton.click();
        return categoriesaddbutton;
    }

    //open cart page or cart drawer
    async clickcategoriesCartButton() {
        const categoriescartButton = this.page.getByRole('link', { name: /Cart has items|Cart/i }).first();
        await categoriescartButton.waitFor({ state: 'visible', timeout: 15000 });
        await categoriescartButton.click();
        return categoriescartButton;
    }

     //checking if cart count updated on shop page
    async checkcategoriesAddToCartProduct() {
        const categoriescartLink = this.page.getByRole('link', { name: /Cart has items/i });
        await categoriescartLink.waitFor({ state: 'visible', timeout: 30000 });
        return categoriescartLink;
    }
}