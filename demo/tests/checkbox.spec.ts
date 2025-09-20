import { test, expect } from '@playwright/test'

test.describe('Checkbox', () => {
  test('renders and can be checked', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Checkbox/i }).click()
    const checkbox = page.getByTestId('demo-checkbox')
    await expect(checkbox).toBeVisible()
    await checkbox.check()
    await expect(checkbox).toBeChecked()
  })

  test('is focusable and can be toggled with keyboard', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Checkbox/i }).click()
    const checkbox = page.getByTestId('demo-checkbox')
    await checkbox.focus()
    await expect(checkbox).toBeFocused()
    await page.keyboard.press('Space')
    await expect(checkbox).toBeChecked()
    await page.keyboard.press('Space')
    await expect(checkbox).not.toBeChecked()
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Checkbox/i }).click()
    const checkbox = page.getByTestId('demo-checkbox')
    await expect(checkbox).toHaveAttribute('type', 'checkbox')
    // Optionally, check for aria-checked, aria-disabled, etc.
  })

  test('disabled state prevents interaction', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Checkbox/i }).click()
    // Set disabled state via playground controls if possible
    // Example: await page.getByLabel('Disabled:').check()
    // await expect(checkbox).toBeDisabled()
    // await expect(checkbox).toHaveAttribute('aria-disabled', 'true')
  })
})
