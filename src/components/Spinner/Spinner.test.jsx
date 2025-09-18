import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Spinner from './Spinner'

describe('Spinner', () => {
  const defaultProps = {
    size: 'md',
    color: 'primary',
    ariaLabel: 'Loading...',
    className: 'custom-class',
  }

  it('renders with default props', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('hcc-spinner')
    expect(spinner).toHaveAttribute('aria-label', 'Loading')
  })

  it('applies size and color classes', () => {
    render(<Spinner size="lg" color="danger" />)
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('hcc-spinner--lg')
    expect(spinner).toHaveClass('hcc-spinner--danger')
  })

  it('applies custom className', () => {
    render(<Spinner className="my-spinner" />)
    expect(screen.getByRole('status')).toHaveClass('my-spinner')
  })

  it('sets custom aria-label', () => {
    render(<Spinner ariaLabel="Please wait" />)
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      'Please wait',
    )
  })

  it('is accessible (axe)', async () => {
    const { container } = render(<Spinner {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
