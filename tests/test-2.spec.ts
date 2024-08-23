import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('img', { name: 'open menu burger button' }).click();
  await page.getByRole('link', { name: 'Meet the Founders' }).click();
  await page.getByRole('banner').click();
  await page.getByRole('img', { name: 'open menu burger button' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Book consultation' }).click();
  await page.getByText('Full Name: *').click();
  await page.getByLabel('Full Name: *').fill('ann');
  await page.getByLabel('Full Name: *').press('Tab');
  await page.getByLabel('Postcode: *').fill('n12 9ab');
  await page.getByLabel('Postcode: *').press('Tab');
  await page.getByLabel('House/Flat No. & Street Name').fill('9 high road');
  await page.getByLabel('House/Flat No. & Street Name').press('Tab');
  await page.getByLabel('City: *').fill('london');
  await page.getByLabel('City: *').press('Tab');
  await page.getByLabel('Phone Number: *').fill('093 39 29222');
  await page.getByLabel('Phone Number: *').press('Tab');
  await page.getByLabel('Email Address: *').fill('ann@gmail.com');
  await page.getByRole('button', { name: 'Request Design Consultation' }).click();
  await page.getByRole('img', { name: 'open menu burger button' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('heading', { name: '🔥Fireplace Palace' }).click();
});