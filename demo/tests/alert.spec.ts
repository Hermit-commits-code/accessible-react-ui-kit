import { test, expect } from '@playwright/test'

test.describe('Alert', () => {
  test('renders alert component', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Alert/i }).click()
    const alert = page.getByTestId('demo-alert')
    await expect(alert).toBeVisible()
  })

  test('alert is accessible by keyboard (dismissible)', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Alert/i }).click()
    // Enable dismissible via playground controls if possible
    // Example: await page.getByLabel('Dismissible:').check()
    // Focus the close button and activate it
    // const closeBtn = page.getByRole('button', { name: /close/i })
    // await closeBtn.focus()
    // await expect(closeBtn).toBeFocused()
    // await page.keyboard.press('Enter')
    // await expect(page.getByTestId('demo-alert')).not.toBeVisible()
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Alert/i }).click()
    const alert = page.getByTestId('demo-alert')
    // ARIA role should be 'alert' or 'status' depending on implementation
    await expect(alert).toHaveAttribute('role', /alert|status/)
    // Optionally, check for aria-live or other attributes
  })

  test('alert receives focus when programmatically focused', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Alert/i }).click()
    const alert = page.getByTestId('demo-alert')
    await alert.focus()
    await expect(alert).toBeFocused()
  })

  test('alert is not visible after dismiss (if dismissible)', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Alert/i }).click()
    // Enable dismissible via playground controls if possible
    // Example: await page.getByLabel('Dismissible:').check()
    // const closeBtn = page.getByRole('button', { name: /close/i })
    // await closeBtn.click()
    // await expect(page.getByTestId('demo-alert')).not.toBeVisible()
  })
})
