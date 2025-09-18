import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Button from './Button'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  it('renders without crashing and shows children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant and size props', () => {
    const { rerender } = render(
      <Button variant="secondary" size="lg">
        Big
      </Button>,
    )
    const btn = screen.getByRole('button')
    expect(btn.className).toMatch(/hcc-btn--secondary/)
    expect(btn.className).toMatch(/hcc-btn--lg/)
    rerender(
      <Button variant="danger" size="sm">
        Small
      </Button>,
    )
    expect(btn.className).toMatch(/hcc-btn--danger/)
    expect(btn.className).toMatch(/hcc-btn--sm/)
  })

  it('fires onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Fire</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled or loading', () => {
    const { rerender } = render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
    rerender(<Button loading>Loading</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is accessible (no axe violations)', async () => {
    const { container } = render(<Button>Accessible</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles empty children gracefully', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
