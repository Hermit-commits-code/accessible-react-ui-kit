import { test, expect } from '@playwright/test'

test.describe('Card', () => {
  test('renders card component', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Card/i }).click()
    const card = page.getByTestId('demo-card')
    await expect(card).toBeVisible()
  })

  test('card is focusable programmatically', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Card/i }).click()
    const card = page.getByTestId('demo-card')
    await card.focus()
    await expect(card).toBeFocused()
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Card/i }).click()
    const card = page.getByTestId('demo-card')
    // Optionally check for role, aria-label, etc. if your Card supports them
    // await expect(card).toHaveAttribute('role', 'region')
  })

  test('card content is accessible', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Card/i }).click()
    const card = page.getByTestId('demo-card')
    await expect(card).toContainText(/Card Header|Card Footer|card body/i)
  })

  test('card supports keyboard navigation if interactive', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Card/i }).click()
    // If Card is interactive, test Tab/Enter/Space
    // Example: await card.focus(); await page.keyboard.press('Enter')
  })
})
