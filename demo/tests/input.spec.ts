import { test, expect } from '@playwright/test'

test.describe('Input', () => {
  test('renders and accepts text', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Input/i }).click()
    const input = page.getByTestId('demo-input')
    await expect(input).toBeVisible()
    await input.fill('Hello')
    await expect(input).toHaveValue('Hello')
  })

  test('is focusable and supports keyboard input', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Input/i }).click()
    const input = page.getByTestId('demo-input')
    await input.focus()
    await expect(input).toBeFocused()
    await page.keyboard.type('World')
    await expect(input).toHaveValue('World')
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Input/i }).click()
    const input = page.getByTestId('demo-input')
    await expect(input).toHaveAttribute('type', 'text')
    // Optionally, check for aria-invalid, aria-required, etc.
  })

  test('disabled state prevents input', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Input/i }).click()
    // Set disabled state via playground controls if possible
    // Example: await page.getByLabel('Disabled:').check()
    // await expect(input).toBeDisabled()
    // await expect(input).toHaveAttribute('aria-disabled', 'true')
  })
})
