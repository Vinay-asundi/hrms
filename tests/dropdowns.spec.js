const{test,expect}=require('@playwright/test')


test('handle dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption({label:'India'})//label
    await page.locator('#country').selectOption('Japan')//text
    await page.locator('#country').selectOption({value:'uk'})//value
    await page.locator('#country').selectOption({index:3})//index
    await page.selectOption('#country',"Brazil")


    //mutiple dropdowns:::::::::::::::::::::::::::
    await page.selectOption('#colors',['Blue','Red','Yellow'])
    

























    await page.waitForTimeout(3000)












    













})