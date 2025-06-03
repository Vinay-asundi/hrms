const{test,expect}=require('@playwright/test')


test('handling table',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table=await page.locator('productTable')

    //total number of rows & columns
    




















})