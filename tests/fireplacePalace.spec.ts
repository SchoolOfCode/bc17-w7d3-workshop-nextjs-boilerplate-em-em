import { test, expect } from '@playwright/test';

test('homepage', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByRole('heading', { name: '🔥Fireplace Palace' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Cosy, warm fireplace cartoon' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Discover the Perfect' })).toBeVisible();
  });

  test('book booking consultation', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByRole('heading', { name: '🔥Fireplace Palace' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Cosy, warm fireplace cartoon' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Book consultation' })).toBeVisible();
    await page.getByRole('button', { name: 'Book consultation' }).click();
    await page.goto('http://localhost:3000/booking');
    await expect(page.getByRole('group', { name: 'Personal Information:' })).toBeVisible();
    await expect(page.getByRole('group', { name: 'Contact Information:' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Request Design Consultation' })).toBeVisible();
    await page.getByLabel('Full Name: *').click();
    await page.getByLabel('Full Name: *').press('CapsLock');
    await page.getByLabel('Full Name: *').fill('J');
    await page.getByLabel('Full Name: *').press('CapsLock');
    await page.getByLabel('Full Name: *').fill('John ');
    await page.getByLabel('Full Name: *').press('CapsLock');
    await page.getByLabel('Full Name: *').fill('John D');
    await page.getByLabel('Full Name: *').press('CapsLock');
    await page.getByLabel('Full Name: *').fill('John Doe');
    await page.getByLabel('Postcode: *').click();
    await page.getByLabel('Postcode: *').press('CapsLock');
    await page.getByLabel('Postcode: *').fill('SW19XU');
    await page.getByLabel('Postcode: *').press('CapsLock');
    await page.getByLabel('House/Flat No. & Street Name').click();
    await page.getByLabel('House/Flat No. & Street Name').fill('12 ');
    await page.getByLabel('House/Flat No. & Street Name').press('CapsLock');
    await page.getByLabel('House/Flat No. & Street Name').press('CapsLock');
    await page.getByLabel('House/Flat No. & Street Name').fill('12 Road');
    await page.getByLabel('City: *').click();
    await page.getByLabel('City: *').press('CapsLock');
    await page.getByLabel('City: *').fill('N');
    await page.getByLabel('City: *').press('CapsLock');
    await page.getByLabel('City: *').fill('Narnia');
    await page.getByLabel('Phone Number: *').click();
    await page.getByLabel('Phone Number: *').fill('07771234567');
    await page.getByLabel('Email Address: *').click();
    await page.getByLabel('Email Address: *').fill('john');
    await page.getByLabel('Email Address: *').press('CapsLock');
    await page.getByLabel('Email Address: *').fill('johnD');
    await page.getByLabel('Email Address: *').press('CapsLock');
    await page.getByLabel('Email Address: *').fill('johndoe@email.com');
    await page.getByRole('button', { name: 'Request Design Consultation' }).click();
    await expect(page.getByText('Form submitted successfully!!')).toBeVisible();
  });

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