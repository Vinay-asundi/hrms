const {test,expect}=require('@playwright/test')


test('locatores',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    // await page.locator('locator').click()
    await page.click('id=login2')
    await page.fill('#loginusername','pavanol')
    await page.fill('input[id="loginpassword"]','test@123')
    await page.click('//button[normalize-space()="Log in"]')

    














})