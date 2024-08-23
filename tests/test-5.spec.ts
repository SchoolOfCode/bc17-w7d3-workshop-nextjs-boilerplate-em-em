import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: '🔥Fireplace Palace' }).click();
  await page.getByLabel('Postcode: *').click();
  await page.getByLabel('Postcode: *').fill('n12 8ab');
  await page.getByLabel('Postcode: *').press('Tab');
  await page.getByLabel('House/Flat No. & Street Name').fill('9 high road');
  await page.getByLabel('House/Flat No. & Street Name').press('Tab');
  await page.getByLabel('City: *').fill('london');
  await page.getByLabel('City: *').press('Tab');
  await page.getByLabel('Phone Number: *').fill('92 9393 93939');
  await page.getByLabel('Phone Number: *').press('Tab');
  await page.getByLabel('Email Address: *').fill('ann~gmail.com');
  await page.getByRole('button', { name: 'Request Design Consultation' }).click();
});