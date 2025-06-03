const {test,expect}=require('@playwright/test')

test('Alert',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

//enabling alert handler:::::::::::::::::::::::::
    page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('Alert')
      expect(dialog.message()).toContain('I am an alert box!')
      await dialog.accept()//this will close dialogue
    })

    await page.click('//button[normalize-space()="Alert"]')
    await page.waitForTimeout(5000)

















})