import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Checkbox from './Checkbox'

expect.extend(toHaveNoViolations)

describe('Checkbox', () => {
  it('renders without crashing and shows label', () => {
    render(<Checkbox label="Accept" />)
    expect(screen.getByLabelText('Accept')).toBeInTheDocument()
  })

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox label="Accept" onChange={handleChange} />)
    fireEvent.click(screen.getByLabelText('Accept'))
    expect(handleChange).toHaveBeenCalled()
  })

  it('is checked and unchecked as expected', () => {
    const { rerender } = render(
      <Checkbox label="Check" checked={false} onChange={() => {}} />,
    )
    const input = screen.getByLabelText('Check')
    expect(input.checked).toBe(false)
    rerender(<Checkbox label="Check" checked={true} onChange={() => {}} />)
    expect(screen.getByLabelText('Check').checked).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox label="Disabled" disabled />)
    expect(screen.getByLabelText('Disabled')).toBeDisabled()
  })

  it('shows error, success, and help text', () => {
    render(<Checkbox label="Label" error="Error!" success="" help="Help!" />)
    expect(screen.getByText('Error!')).toBeInTheDocument()
    expect(screen.getByText('Help!')).toBeInTheDocument()
  })

  it('is accessible (no axe violations)', async () => {
    const { container } = render(<Checkbox label="Accessible" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles empty label gracefully', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Checkbox label="Styled" className="custom-checkbox" />)
    expect(document.querySelector('.hcc-checkbox-group').className).toMatch(
      /custom-checkbox/,
    )
  })
})
