// spec: specs/test-plan.md

import { test, expect } from '@playwright/test';

test.describe('Login and Verify', () => {
  test('Login and Verify', async ({ page }) => {
    // Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // Keyboard action -> Type Username as "standard_user" sequentially
    await page.locator('[data-test="username"]').pressSequentially('standard_user');

    // Keyboard action -> Type Password as "secret_sauce" sequentially
    await page.locator('[data-test="password"]').pressSequentially('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();

    // Wait until network is idle
    await page.waitForLoadState('networkidle');
    
    // Verify URL contains substring as inventory
    await expect(page).toHaveURL(/inventory/);
    
    // Verify page contains text Products element is visible
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    
    // Verify element text is "Products"
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });
});
