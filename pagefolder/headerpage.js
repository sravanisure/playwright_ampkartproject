export class headerPage {
    constructor(page) {
        this.page = page;
        this.homelink = "(//a[normalize-space()='Home'])[1]";
        this.shoplink = "(//a[normalize-space()='Shop'])[1]";
        this.bloglink = "(//a[normalize-space()='Blog'])[1]";
        this.customerlink = "(//a[normalize-space()='Customer Quote Maker'])[1]";
        this.priceListLink = this.page.locator("(//a[normalize-space()='Price List'])[1]");
        this.homeheading = this.page.locator("//span[text()=' Electrical Supply, Built for Speed']");
        this.shopheading = this.page.locator("//h1[text()='All Products']");
        this.blogheading = this.page.locator("(//div[text()='Latest articles, product knowledge, and buying insights curated for customers.'])[1]");
    }

    async gotoshoppage() {
    await this.page.goto('https://www.ampkart.com/shop', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await this.page.waitForLoadState('domcontentloaded');
}

    async clickHomeLink() {
        await this.page.locator(this.homelink).click();
    }
    //validate home heading
    async validateHomeHeading() {
        await this.homeheading.waitFor({ state: 'visible' });
        return this.homeheading;
    }

    //click on add button
    async clickAddButton() {
        const addbutton = this.page.locator("(//span[text()='Add'])[1]");
        await addbutton.waitFor({ state: 'visible', timeout: 15000 });
        await addbutton.click();
        return addbutton;
    }

    //open cart page or cart drawer
    async clickCartButton() {
        const cartButton = this.page.getByRole('link', { name: /Cart has items|Cart/i }).first();
        await cartButton.waitFor({ state: 'visible', timeout: 15000 });
        await cartButton.click();
        return cartButton;
    }

    //checking if the cart has an item after add to cart
    async checkAddToCartProduct() {
        const cartPage = this.page.getByRole('heading', { name: 'My Cart' });
        await cartPage.waitFor({ state: 'visible', timeout: 30000 });
        return cartPage;
    }
    
    //click on shop link
    async clickShopLink() {
        await this.page.locator(this.shoplink).click();
    }

    //validate shop heading
    async validateshopHeading() {
        await this.shopheading.waitFor({ state: 'visible' });
        return this.shopheading;
    }

    //click on add button
    async clickshopAddButton() {
        const shopaddbutton = this.page.locator("(//span[text()='Add'])[2]");
        await shopaddbutton.waitFor({ state: 'visible', timeout: 15000 });
        await shopaddbutton.click();
        return shopaddbutton;
    }

    //open cart page or cart drawer
    async clickCartButton() {
        const cartButton = this.page.getByRole('link', { name: /Cart has items|Cart/i }).first();
        await cartButton.waitFor({ state: 'visible', timeout: 15000 });
        await cartButton.click();
        return cartButton;
    }

     //checking if cart count updated on shop page
    async checkshopAddToCartProduct() {
        const cartPage = this.page.getByRole('heading', { name: 'My Cart' });
        await cartPage.waitFor({ state: 'visible', timeout: 30000 });
        return cartPage;
    }
    
    //click on blog link
    async clickBlogLink() {
        await this.page.locator(this.bloglink).click();
    }

    //validate blog heading
    async validateBlogHeading() {
        await this.blogheading.waitFor({ state: 'visible' });
        return this.blogheading;
    }

    //clcik on any article
    async clcikonarticle() {
        const mccbsupplier = this.page.locator("//a[normalize-space()='Top 10 MCCB Suppliers in Kolkata in 2026']");
        await mccbsupplier.waitFor({ state: 'visible', timeout: 30000 });
        await mccbsupplier.click();
        return mccbsupplier;
    }

    //click on price list link
    async clickPriceListLink() {
        await this.priceListLink.waitFor({ state: 'visible', timeout: 15000 });
        await this.priceListLink.click();
    }

    //click on customer quote link
    async clickCustomerLink() {
        const customerLink = this.page.locator(this.customerlink);
        await customerLink.waitFor({ state: 'visible', timeout: 15000 });
        await customerLink.click();
    }

}

