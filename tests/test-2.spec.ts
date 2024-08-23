import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Book consultation' }).click();
  await page.getByText('Full Name: *').click();
  await page.getByLabel('Full Name: *').fill('Bob');
  await page.getByLabel('Full Name: *').press('Tab');
  await page.getByLabel('Postcode: *').fill('SW1 9hg');
  await page.getByLabel('Postcode: *').press('Tab');
  await page.getByLabel('House/Flat No. & Street Name').fill('23 Road');
  await page.getByLabel('House/Flat No. & Street Name').press('Tab');
  await page.getByLabel('City: *').fill('Narnia');
  await page.getByLabel('City: *').press('Tab');
  await page.getByLabel('Phone Number: *').fill('0123456789');
  await page.getByLabel('Phone Number: *').press('Tab');
  await page.getByLabel('Email Address: *').fill('mail@mail.com');
  await page.getByRole('button', { name: 'Request Design Consultation' }).click();
  await expect(page.locator('form')).toContainText('Form submitted successfully!!');
});