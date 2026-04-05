// spec: specs/basic-operations.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Adding New Todos', () => {
  test('Login and Verify', async ({ page }) => {
    // Preconditions: Application is accessible, browser is open, valid credentials exist
    
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter Username as "standard_user"
    await page.locator('[data-test="username"]').fill('standard_user');

    // 3. Enter Password as "secret_sauce"
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 4. Click login button
    await page.locator('[data-test="login-button"]').click();

    // 5. Page loads, Wait until network is idle and url contains substring as inventory
    await expect(page).toHaveURL(/inventory/);

    // Verify: page contains text Products and that element is attached to dom
    const productsElement = page.getByText('Products');
    await expect(productsElement).toBeAttached();
    await expect(productsElement).toBeVisible();
  });
});
