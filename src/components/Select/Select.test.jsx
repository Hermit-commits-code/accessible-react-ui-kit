import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Select from './Select'

describe('Select', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ]
  const defaultProps = {
    label: 'Choose one',
    id: 'test-select',
    value: '1',
    onChange: jest.fn(),
    options,
    help: 'Helpful text',
    className: 'custom-class',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders group and options', () => {
    render(<Select {...defaultProps} />)
    expect(screen.getByLabelText('Choose one')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('checks the correct option', () => {
    render(<Select {...defaultProps} value="2" />)
    expect(screen.getByRole('combobox')).toHaveValue('2')
  })

  it('calls onChange when a new option is selected', () => {
    render(<Select {...defaultProps} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
  })

  it('applies disabled to all if disabled', () => {
    render(<Select {...defaultProps} disabled />)
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('applies disabled to individual option', () => {
    render(<Select {...defaultProps} />)
    expect(screen.getByText('Option 3')).toBeDisabled()
  })

  it('shows help text if provided', () => {
    render(<Select {...defaultProps} help="Some help" />)
    expect(screen.getByText('Some help')).toBeInTheDocument()
  })

  it('shows error and not help/success if error', () => {
    render(
      <Select
        {...defaultProps}
        error="Error!"
        success="Success!"
        help="Help!"
      />,
    )
    expect(screen.getByText('Error!')).toBeInTheDocument()
    expect(screen.queryByText('Success!')).not.toBeInTheDocument()
    expect(screen.queryByText('Help!')).not.toBeInTheDocument()
  })

  it('shows success if provided and no error', () => {
    render(<Select {...defaultProps} success="Success!" />)
    expect(screen.getByText('Success!')).toBeInTheDocument()
  })

  it('applies custom className to select', () => {
    render(<Select {...defaultProps} className="my-select" />)
    expect(screen.getByRole('combobox')).toHaveClass('my-select')
  })

  it('is accessible (axe)', async () => {
    const { container } = render(<Select {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
