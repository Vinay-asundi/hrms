const {test,expect}=require('@playwright/test')

test('handle checkboxes',async({page})=>{

    await page.goto('https://artoftesting.com/samplesiteforselenium')


    //single checkbox:::::::::::::::
    // await page.locator("//input[@class='Automation' and @type='checkbox']").check()
    // expect(await page.locator("//input[@class='Automation' and @type='checkbox']")).toBeChecked()

    

//mutiple checkboxes:::::::::::::::::::::::::::::
    const checkboxeslocators=[
        "//input[@class='Automation' and @type='checkbox']",
        "//input[@class='Performance' and @type='checkbox']"
    ]

    for (const locator of checkboxeslocators){
        await page.locator(locator).check()
    }


    for (const locator of checkboxeslocators){
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck()
    }}























    await page.waitForTimeout(5000)
})
