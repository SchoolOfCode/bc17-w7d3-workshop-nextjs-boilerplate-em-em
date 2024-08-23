import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/booking');
});