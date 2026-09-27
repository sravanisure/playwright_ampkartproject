import { test, expect } from '@playwright/test';
import { headerPage } from '../pagefolder/headerpage';
import { customerQuotePage } from '../pagefolder/customerquotepage';
import { PriceListPage } from '../pagefolder/pricelistpage';
import { CategoriesPage } from '../pagefolder/categoriespage.js';
import { BrandPage } from '../pagefolder/brandpage.js';
import { loginpage } from '../pagefolder/login.js';


test.describe.configure({ mode: 'serial' });

test('validate Ampkart header execution', async ({ page }) => {
    const header = new headerPage(page);
    const customerQuote = new customerQuotePage(page);
    const priceList = new PriceListPage(page);
    const categories = new CategoriesPage(page);
    const brand = new BrandPage(page);
    const login = new loginpage(page);

    await header.gotoshoppage();
    await header.clickHomeLink();
    await expect(await header.validateHomeHeading()).toBeVisible();

    await header.clickAddButton();
    await header.clickCartButton();
    await expect(await header.checkAddToCartProduct()).toBeVisible();

    //chckeing on shop link
    await header.clickShopLink();
    await expect(await header.validateshopHeading()).toBeVisible();
    await header.clickshopAddButton();
    await header.clickCartButton();
    await expect(await header.checkshopAddToCartProduct()).toBeVisible();

    //checking on blog link
    await header.clickBlogLink();
    await expect(await header.validateBlogHeading()).toBeVisible();
    //checking on any article
    await header.clcikonarticle();
    
    //click on customer quote link
    await header.clickCustomerLink();

    await expect(await customerQuote.validateQuotePage()).toBeVisible();
    await customerQuote.fillCustomerDetails();

    await expect(customerQuote.nameBusinessInput).toHaveValue('John Doe');
    await expect(customerQuote.companyInput).toHaveValue('Ampkart Solutions');
    await expect(customerQuote.customerNameInput).toHaveValue('John Doe');
    await expect(customerQuote.emailInput).toHaveValue('john.doe@example.com');
    await expect(customerQuote.phoneInput).toHaveValue('9876543210');
    
    //click on pricelist dropdown and select V-Guard option
    await priceList.clickPriceListDropdown();
    await priceList.selectVGuard();
    await expect(await priceList.validateVGuardHeading()).toBeVisible();

    // Click Categories
    await categories.clickCategories();

    // Select Circuit Breakers
    await categories.selectCircuitBreakers();

    // Click View all Circuit Breakers
    await categories.clickViewAllCircuitBreakers();
    await categories.clickcategoriesAddButton();
    await categories.clickcategoriesCartButton();
    await expect(await categories.checkcategoriesAddToCartProduct()).toBeVisible();
    
    //click brand link and validate heading
    await brand.clickBrandLink();
    await expect(await brand.validateBrandHeading()).toBeVisible(); 
    await brand.clickBrandAddButton();
    await brand.clickBrandCartButton();
    await expect(await brand.checkBrandAddToCartProduct()).toBeVisible();

    //clcik on login link and validate heading
    await login.clickLoginLink();
    await login.entermobileNumber();
    await expect(await login.entermobileNumber()).toHaveValue('9876543210');
    await login.continuebutton();
    await login.validateOTPPopup();
    await expect(await login.validateOTPPopup()).toBeVisible();
    
});

