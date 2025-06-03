const {test,expect}=require('@playwright/test')

test('Auto suggest dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi') 
    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')

    const fromCityOptions= await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
    for(let option of fromCityOptions)
    {
         const value=await option.textContent()
        // console.log(value)

        if(value.includes('AIIMS')){
            await option.click()
            break
        }
    } 
    const table=await page.locator('productTable')
    const columns=await table.locator('thead tr th')
    console.log('Number of columns', await columns.count())

    const rows=await table.locator('tbody tr')
    console.log('Number of rows:',await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count().toBe(5))
    
    
    




















    await page.waitForTimeout(3000)





















})