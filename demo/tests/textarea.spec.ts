import { test, expect } from '@playwright/test'

test.describe('Textarea', () => {
  test('renders and accepts text', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Textarea/i }).click()
    const textarea = page.getByTestId('demo-textarea')
    await expect(textarea).toBeVisible()
    await textarea.fill('Hello world')
    await expect(textarea).toHaveValue('Hello world')
  })

  test('is focusable and supports keyboard navigation', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Textarea/i }).click()
    const textarea = page.getByTestId('demo-textarea')
    await textarea.focus()
    await expect(textarea).toBeFocused()
    await textarea.type('abc')
    await expect(textarea).toHaveValue(/abc$/)
    await page.keyboard.press('Tab')
    await expect(textarea).not.toBeFocused()
  })

  test('has correct ARIA role and attributes', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Textarea/i }).click()
    const textarea = page.getByTestId('demo-textarea')
    // Native <textarea> has role textbox
    await expect(textarea).toHaveAttribute('role', /textbox|^$/)
    await expect(textarea).toHaveAttribute('aria-disabled', /false|true/)
    await expect(textarea).toHaveAttribute('aria-readonly', /false|true/)
    await expect(textarea).toHaveAttribute('aria-invalid', /false|true/)
    // aria-describedby should be present if help or error text is rendered
    const describedby = await textarea.getAttribute('aria-describedby')
    if (describedby) {
      const describedElem = await page.locator(`#${describedby}`)
      await expect(describedElem).toBeVisible()
    }
  })

  test('disabled and readOnly states', async ({ page }) => {
    await page.goto(
      'http://localhost:5173/accessible-react-ui-kit/?textareaDisabled=true',
    )
    await page.getByRole('tab', { name: /Textarea/i }).click()
    const textarea = page.getByTestId('demo-textarea')
    await expect(textarea).toBeDisabled()
    await expect(textarea).toHaveAttribute('aria-disabled', 'true')
    // ReadOnly
    await page.goto(
      'http://localhost:5173/accessible-react-ui-kit/?textareaReadOnly=true',
    )
    await page.getByRole('tab', { name: /Textarea/i }).click()
    const textareaRO = page.getByTestId('demo-textarea')
    await expect(textareaRO).toHaveAttribute('readonly', '')
    await expect(textareaRO).toHaveAttribute('aria-readonly', 'true')
  })

  test('label is associated with textarea', async ({ page }) => {
    await page.goto('http://localhost:5173/accessible-react-ui-kit/')
    await page.getByRole('tab', { name: /Textarea/i }).click()
    const textarea = page.getByTestId('demo-textarea')
    const id = await textarea.getAttribute('id')
    if (id) {
      const label = await page.locator(`label[for="${id}"]`)
      await expect(label).toBeVisible()
    }
  })
})
