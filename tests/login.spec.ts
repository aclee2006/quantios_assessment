import { test, expect } from '@playwright/test';

test('Able to login successfully',async ({ page })=>{
   
   //access the login page
   await page.goto('https://qainterview.netlify.app/');
   //login using user name and password
   await page.getByRole('textbox', { name: 'Email Address' }).click();
   await page.getByRole('textbox', { name: 'Email Address' }).fill('monday02');
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill('@AAaa1111');
   await page.getByRole('button', { name: 'Login' }).click();
   //check if the successful login text is visible
   await expect(page.locator('#greeting')).toContainText('Hi monday02!');
   //logout user
   await page.getByRole('button', { name: 'Logout' }).click();

})