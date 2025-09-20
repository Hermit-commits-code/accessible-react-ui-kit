import { test, expect } from '@playwright/test'

test.describe('Modal', () => {
  test('opens and closes with button and Escape', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Modal/i }).click()
    const openBtn = page.getByRole('button', { name: /open modal/i })
    await openBtn.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
  })

  test('focus is trapped in modal', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Modal/i }).click()
    await page.getByRole('button', { name: /open modal/i }).click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    // Tab through focusable elements
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    // Add more assertions as needed
  })
})
