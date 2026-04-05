// spec: specs/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login and Verify', () => {
  test('Login and Verify', async ({ page }) => {
    // Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // Click username field
    await page.locator('[data-test="username"]').click();

    // Type Username as "standard_user" using keyboard
    await page.locator('[data-test="username"]').pressSequentially('standard_user');

    // Click password field
    await page.locator('[data-test="password"]').click();

    // Type Password as "secret_sauce" using keyboard
    await page.locator('[data-test="password"]').pressSequentially('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();

    // Wait until network is idle and url contains inventory
    await new Promise(f => setTimeout(f, 2 * 1000));

    // Page contains text Products and that element is attached to dom
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });
});
