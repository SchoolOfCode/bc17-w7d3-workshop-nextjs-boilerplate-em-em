import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: '🔥Fireplace Palace' }).click();
  await page.getByRole('img', { name: 'open menu burger button' }).click();
  await expect(page.getByRole('button', { name: 'Book consultation' })).toBeVisible();
});