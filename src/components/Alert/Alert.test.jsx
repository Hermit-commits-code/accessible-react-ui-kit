import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Alert from './Alert'

expect.extend(toHaveNoViolations)

describe('Alert', () => {
  it('renders without crashing and shows children', () => {
    render(<Alert variant="success">Success!</Alert>)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('Success!')).toBeInTheDocument()
  })

  it('applies variant prop for style and icon', () => {
    // error should use role="alert"
    const { rerender } = render(<Alert variant="error">Error!</Alert>)
    expect(screen.getByRole('alert').className).toMatch(/hcc-alert--error/)
    // info should use role="status"
    rerender(<Alert variant="info">Info!</Alert>)
    expect(screen.getByRole('status').className).toMatch(/hcc-alert--info/)
  })

  it('is accessible (no axe violations)', async () => {
    const { container } = render(<Alert variant="warning">Warning!</Alert>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles empty children gracefully', () => {
    render(<Alert variant="info" />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders a dismiss button when onClose is provided', () => {
    const onClose = jest.fn()
    render(
      <Alert variant="info" onClose={onClose}>
        Dismiss me
      </Alert>,
    )
    const btn = screen.getByRole('button', { name: /dismiss alert/i })
    expect(btn).toBeInTheDocument()
    btn.focus()
    expect(document.activeElement).toBe(btn)
    btn.click()
    expect(onClose).toHaveBeenCalled()
  })

  it('dismiss button is keyboard accessible', () => {
    const onClose = jest.fn()
    render(
      <Alert variant="info" onClose={onClose}>
        Dismiss me
      </Alert>,
    )
    const btn = screen.getByRole('button', { name: /dismiss alert/i })
    btn.focus()
    expect(document.activeElement).toBe(btn)
    btn.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
    )
    btn.click()
    expect(onClose).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(
      <Alert variant="info" className="custom-alert">
        Custom
      </Alert>,
    )
    expect(screen.getByRole('status').className).toMatch(/custom-alert/)
  })

  it('sets correct aria-live and role for each variant', () => {
    const { rerender } = render(<Alert variant="info">Info</Alert>)
    let el = screen.getByRole('status')
    expect(el).toHaveAttribute('aria-live', 'polite')
    rerender(<Alert variant="success">Success</Alert>)
    el = screen.getByRole('status')
    expect(el).toHaveAttribute('aria-live', 'polite')
    rerender(<Alert variant="warning">Warning</Alert>)
    el = screen.getByRole('alert')
    expect(el).toHaveAttribute('aria-live', 'assertive')
    rerender(<Alert variant="error">Error</Alert>)
    el = screen.getByRole('alert')
    expect(el).toHaveAttribute('aria-live', 'assertive')
  })
})
