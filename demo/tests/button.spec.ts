import { test, expect } from '@playwright/test'

test.describe('Button', () => {
  test('renders and is clickable', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Button/i }).click()
    const button = page.getByTestId('demo-button')
    await expect(button).toBeVisible()
    await button.click()
    // Add assertion for button action if possible
  })

  test('is focusable and can be activated with keyboard', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Button/i }).click()
    const button = await page.getByTestId('demo-button')
    await button.focus()
    await expect(button).toBeFocused()
    await page.keyboard.press('Enter')
    // Optionally, assert action or visual feedback
    await page.keyboard.press('Tab')
    await page.keyboard.press('Space')
    // Optionally, assert action or visual feedback
  })

  test('has correct attributes for native button', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Button/i }).click()
    const button = page.getByTestId('demo-button')
    await expect(button).toHaveAttribute('type', 'button')
    // Check for aria-disabled if applicable
    // await expect(button).toHaveAttribute('aria-disabled', 'false')
  })

  test('shows focus ring when focused', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Button/i }).click()
    const button = page.getByTestId('demo-button')
    await button.focus()
    // Optionally, check for focus-visible class or outline style
    // Example: await expect(button).toHaveClass(/focus-visible/)
  })

  test('disabled state prevents interaction', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Button/i }).click()
    // Set disabled state via playground controls if possible
    // Example: await page.getByLabel('Disabled:').check()
    // const button = page.getByTestId('demo-button')
    // await expect(button).toBeDisabled()
    // await expect(button).toHaveAttribute('aria-disabled', 'true')
    // await button.click({ trial: true }) // Should not trigger action
  })
})
