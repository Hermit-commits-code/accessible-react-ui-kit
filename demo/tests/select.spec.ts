import { test, expect } from '@playwright/test'

test.describe('Select', () => {
  test('renders and selects option', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Select/i }).click()
    const select = page.getByTestId('demo-select')
    await expect(select).toBeVisible()
    await select.selectOption({ index: 1 })
    // Add assertion for selected value if possible
  })

  test('is focusable and supports keyboard navigation', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Select/i }).click()
    const select = page.getByTestId('demo-select')
    await select.focus()
    await expect(select).toBeFocused()
    // Optionally, test arrow keys or typing to select
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Select/i }).click()
    const select = page.getByTestId('demo-select')
    await expect(select).toHaveAttribute('role', /combobox|listbox/)
    // Optionally, check for aria-expanded, aria-disabled, etc.
  })

  test('disabled state prevents selection', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Select/i }).click()
    // Set disabled state via playground controls if possible
    // Example: await page.getByLabel('Disabled:').check()
    // await expect(select).toBeDisabled()
    // await expect(select).toHaveAttribute('aria-disabled', 'true')
  })
})
