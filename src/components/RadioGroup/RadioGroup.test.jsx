import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import RadioGroup from './RadioGroup'

describe('RadioGroup', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ]
  const defaultProps = {
    label: 'Choose one',
    name: 'test-radio',
    value: '1',
    onChange: jest.fn(),
    options,
    help: 'Helpful text',
    className: 'custom-class',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders group and radios', () => {
    render(<RadioGroup {...defaultProps} />)
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument()
  })

  it('checks the correct radio', () => {
    render(<RadioGroup {...defaultProps} value="2" />)
    expect(screen.getByLabelText('Option 2')).toBeChecked()
  })

  it('calls onChange when a radio is clicked', () => {
    render(<RadioGroup {...defaultProps} />)
    fireEvent.click(screen.getByLabelText('Option 2'))
    expect(defaultProps.onChange).toHaveBeenCalled()
  })

  it('applies disabled to all radios if disabled', () => {
    render(<RadioGroup {...defaultProps} disabled />)
    expect(screen.getByLabelText('Option 1')).toBeDisabled()
    expect(screen.getByLabelText('Option 2')).toBeDisabled()
    expect(screen.getByLabelText('Option 3')).toBeDisabled()
  })

  it('applies disabled to individual option', () => {
    render(<RadioGroup {...defaultProps} />)
    expect(screen.getByLabelText('Option 3')).toBeDisabled()
  })

  it('shows help text if provided', () => {
    render(<RadioGroup {...defaultProps} help="Some help" />)
    expect(screen.getByText('Some help')).toBeInTheDocument()
  })

  it('shows error and not help/success if error', () => {
    render(
      <RadioGroup
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
    render(<RadioGroup {...defaultProps} success="Success!" />)
    expect(screen.getByText('Success!')).toBeInTheDocument()
  })

  it('applies custom className to group', () => {
    render(<RadioGroup {...defaultProps} className="my-radio-group" />)
    expect(screen.getByRole('radiogroup')).toHaveClass('my-radio-group')
  })

  it('is accessible (axe)', async () => {
    const { container } = render(<RadioGroup {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
