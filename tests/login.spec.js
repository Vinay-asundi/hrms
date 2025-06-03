const{test,expext, expect}=require ('@playwright/test');

test('login',async({page})=>{

   await page.goto('https://www.demoblaze.com/index.html')

   const pageTitle=page.title();
   await expect(page).toHaveTitle('STORE');
   const pageurl=page.url()
   await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
   await page.close();
   
})
