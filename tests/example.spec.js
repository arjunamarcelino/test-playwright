// @ts-nocheck
const { test, expect } = require('@playwright/test');

test('verify that search box is working properly', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');

  // Search box input
  await page.getByRole('combobox').fill('Jacket');

  // Press enter
  await page.keyboard.press('Enter');

  // create a locator
  const numPage = page.locator("//div[contains(@class,'toolbar-product')][2]//ul//li");
  const nextPage = page.locator("//div[contains(@class,'toolbar-product')][2]//ul//li[contains(@class,'pages-item-next')]")

  for(let k=0; k<numPage.count-1; k++){
    // create a locator
    const searchResult = page.locator("//div[contains(@class,'product-item-details')]//strong//a");
    const productsName = [];

    for(let i=0; i<await searchResult.count(); i++){
      productsName.push(searchResult.nth(i).innerText)
    }

    for(let j=0; j<productsName.length; j++){
      await expect(productsName).toHaveText('Jacket');
    }

    if(nextPage.isVisible){
      nextPage.click();
    }
  }
});

test('verify that sort descendant functionality is working properly', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');

     // Search box input
     await page.getByRole('combobox').fill('Jacket');
});

test('verify that sort ascendant functionality is working properly', async ({ page }) => {

});

test('verify add to cart is working properly', async ({ page }) => {

});
