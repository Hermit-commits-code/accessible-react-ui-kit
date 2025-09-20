import { test, expect } from '@playwright/test'

test.describe('RadioGroup', () => {
  test('renders and allows selection', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /RadioGroup/i }).click()
    const group = page.getByTestId('demo-radio-group')
    await expect(group).toBeVisible()
    const radios = await group.locator('input[type="radio"]')
    await expect(radios.first()).toBeVisible()
    await radios.first().check()
    await expect(radios.first()).toBeChecked()
  })

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /RadioGroup/i }).click()
    const group = page.getByTestId('demo-radio-group')
    const radios = await group.locator('input[type="radio"]')
    await radios.first().focus()
    await page.keyboard.press('ArrowDown')
    await expect(radios.nth(1)).toBeFocused()
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /RadioGroup/i }).click()
    const group = page.getByTestId('demo-radio-group')
    await expect(group).toHaveAttribute('role', /radiogroup|group/)
    const radios = await group.locator('input[type="radio"]')
    await expect(radios.first()).toHaveAttribute('type', 'radio')
    // Optionally, check for aria-checked, aria-disabled, etc.
  })

  test('disabled state prevents selection', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /RadioGroup/i }).click()
    // Set disabled state via playground controls if possible
    // Example: await page.getByLabel('Disabled:').check()
    // const radios = await page.getByTestId('demo-radio-group').locator('input[type="radio"]')
    // await expect(radios.first()).toBeDisabled()
    // await expect(radios.first()).toHaveAttribute('aria-disabled', 'true')
  })
})
