import { test, expect } from '@playwright/test';

test('check founders out and move on to book consultation', async ({ page }) => {
  // land on homepage
  await page.goto('http://localhost:3000/');
  // Title to be visible
  await expect(page.getByRole('heading', { name: '🔥Fireplace Palace' })).toBeVisible();
  // Burger menu to be visible
  await expect(page.getByRole('img', { name: 'open menu burger button' })).toBeVisible();
  // click burger icon to open menu
  await page.getByRole('img', { name: 'open menu burger button' }).click();
  // expect Meet the Founders link to be visible
  await expect(page.getByRole('link', { name: 'Meet the Founders' })).toBeVisible();
  await page.getByRole('link', { name: 'Meet the Founders' }).click();
  // Meet the Founders content is visible
  await expect(page.getByRole('img').nth(1)).toBeVisible();
  // open menu
  await page.getByRole('img', { name: 'open menu burger button' }).click();
  // see and click home page icon
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await page.getByRole('link', { name: 'Home' }).click();
  // see and click on book consultation button
  await expect(page.getByRole('button', { name: 'Book consultation' })).toBeVisible();
  await page.getByRole('button', { name: 'Book consultation' }).click();
  // Form title visible
  await expect(page.getByRole('heading', { name: 'Design Booking' })).toBeVisible();
});