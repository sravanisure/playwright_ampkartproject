export class PriceListPage {

    constructor(page) {
        this.page = page;

        // Price Lists dropdown
        this.priceListDropdown = page.getByRole('button', { name: /Price Lists/i });

        this.vguardOption = page.locator('.shop-nav-tree__link[href="/price-list/vguard"]');

        this.vguardHeading = page.locator(
            "//h1[contains(normalize-space(.), 'V-Guard') and contains(normalize-space(.), 'Price List')]"
        );
    }

     // Click Price List dropdown
    async clickPriceListDropdown() {
        await this.priceListDropdown.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.priceListDropdown.click();
    }

     // Select V-Guard
    async selectVGuard() {
        await this.vguardOption.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.vguardOption.click();
    }

    // Validate V-Guard heading
    async validateVGuardHeading() {
        await this.vguardHeading.waitFor({
            state: 'visible',
            timeout: 15000
        });

        return this.vguardHeading;
    }
}
