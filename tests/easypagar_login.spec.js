const {test,expect}=require('@playwright/test')

test('login',async({page})=>{
    await page.goto('https://easypagar.com/portal/#/auth/signin')
    // await page.fill('placeholder=Enter Username *','9035502189')
    // await page.fill('placeholder=Enter Password *','12345678')
    await page.getByPlaceholder('Enter Username *').fill('9035502189')
    await page.getByPlaceholder('Enter Password *').fill('12345678')

    await page.getByRole('Button',{type:'submit'}).click()
    // await expect( page.getByText('Directory',{exact:true})).toBeVisible()
    
    await page.click('(//ul[@class="side-menu open flex-nowrap"])/li[1]')
    await page.click("(//a[@class='ng-star-inserted'])[15]")

    await page.click("(//a[@class='slide-item ng-star-inserted'])[1]")

    await page.getByText('Select Organization').click()
    await page.getByText('Tech Firm').click()
    await page.getByText('Select Branch').click()
    await page.getByText('Tech firm', { exact: true }).click();
    await page.getByText('Select Employee').click();
    await page.getByText('Select All').click();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.locator('td:nth-child(11)').first().click({
        button: 'middle'
      });
      await page.getByRole('row', { name: '1 Manjunath R Tech firm 4 1 1' }).getByRole('button').first().click();
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByText('Add Payslip').click();
      await page.getByRole('textbox', { name: 'Name' }).click();
      await page.getByRole('textbox', { name: 'Name' }).fill('raj');
      await page.getByRole('button', { name: 'Choose File' }).click();
      await page.getByRole('button', { name: 'Choose File' }).setInputFiles('aduse.jpg');
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByRole('button', { name: 'close dialog' }).click();
    });
