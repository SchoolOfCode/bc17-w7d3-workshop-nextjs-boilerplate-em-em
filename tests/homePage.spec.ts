import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: '🔥Fireplace Palace' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Cosy, warm fireplace cartoon' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Discover the Perfect' })).toBeVisible();
});