import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Input from './Input'

expect.extend(toHaveNoViolations)

describe('Input', () => {
  it('renders without crashing and shows label', () => {
    render(<Input label="Name" />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('calls onChange when typed in', () => {
    const handleChange = jest.fn()
    render(<Input label="Email" onChange={handleChange} />)
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('shows placeholder and value', () => {
    render(
      <Input
        label="Username"
        placeholder="Enter username"
        value="hermit"
        onChange={() => {}}
      />,
    )
    const input = screen.getByLabelText('Username')
    expect(input.placeholder).toBe('Enter username')
    expect(input.value).toBe('hermit')
  })

  it('is disabled and readOnly as expected', () => {
    render(<Input label="Disabled" disabled readOnly />)
    const input = screen.getByLabelText('Disabled')
    expect(input).toBeDisabled()
    expect(input).toHaveAttribute('readonly')
  })

  it('shows error, success, and help text', () => {
    render(<Input label="Label" error="Error!" success="" help="Help!" />)
    expect(screen.getByText('Error!')).toBeInTheDocument()
    expect(screen.getByText('Help!')).toBeInTheDocument()
  })

  it('is accessible (no axe violations)', async () => {
    const { container } = render(<Input label="Accessible" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles empty label gracefully', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Input label="Styled" className="custom-input" />)
    expect(document.querySelector('.hcc-input-group').className).toMatch(
      /custom-input/,
    )
  })
})
