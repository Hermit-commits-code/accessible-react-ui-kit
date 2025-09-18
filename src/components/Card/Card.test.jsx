import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Card from './Card'

expect.extend(toHaveNoViolations)

describe('Card', () => {
  it('renders without crashing and shows children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders header and footer if provided', () => {
    render(
      <Card header="Header" footer="Footer">
        Body
      </Card>,
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  it('applies shadow, borderless, size, and center props', () => {
    const { rerender } = render(
      <Card shadow borderless size="lg" center>
        Props
      </Card>,
    )
    const card = screen.getByTestId('card-root')
    expect(card.className).toMatch(/hcc-card--shadow/)
    expect(card.className).toMatch(/hcc-card--borderless/)
    expect(card.className).toMatch(/hcc-card--lg/)
    expect(card.className).toMatch(/hcc-card--center/)
    rerender(<Card size="sm">Small</Card>)
    expect(screen.getByTestId('card-root').className).toMatch(/hcc-card--sm/)
  })

  it('renders as the specified element type', () => {
    render(<Card as="article">Article Card</Card>)
    const card = screen.getByTestId('card-root')
    expect(card.tagName.toLowerCase()).toBe('article')
  })

  it('is accessible (no axe violations)', async () => {
    const { container } = render(<Card header="Header">Accessible</Card>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles empty children gracefully', () => {
    render(<Card />)
    // Should still render a card element
    expect(screen.getByTestId('card-root')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom</Card>)
    expect(screen.getByTestId('card-root').className).toMatch(/custom-card/)
  })
})
