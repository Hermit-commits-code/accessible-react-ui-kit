import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Textarea from './Textarea'

describe('Textarea', () => {
  const defaultProps = {
    label: 'Description',
    id: 'test-textarea',
    value: 'Hello world',
    onChange: jest.fn(),
    help: 'Helpful text',
    className: 'custom-class',
    maxLength: 100,
    showCount: true,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders textarea and label', () => {
    render(<Textarea {...defaultProps} />)
    expect(screen.getByLabelText('Description')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows the correct value', () => {
    render(<Textarea {...defaultProps} value="Test value" />)
    expect(screen.getByRole('textbox')).toHaveValue('Test value')
  })

  it('calls onChange when typing', () => {
    render(<Textarea {...defaultProps} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'New text' },
    })
    expect(defaultProps.onChange).toHaveBeenCalled()
  })

  it('applies disabled and readOnly', () => {
    render(<Textarea {...defaultProps} disabled readOnly />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeDisabled()
    expect(textarea).toHaveAttribute('readonly')
  })

  it('shows help text if provided', () => {
    render(<Textarea {...defaultProps} help="Some help" />)
    expect(screen.getByText('Some help')).toBeInTheDocument()
  })

  it('shows error and not help/success if error', () => {
    render(
      <Textarea
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
    render(<Textarea {...defaultProps} success="Success!" />)
    expect(screen.getByText('Success!')).toBeInTheDocument()
  })

  it('shows character counter if showCount and maxLength', () => {
    render(<Textarea {...defaultProps} value="abc" maxLength={10} showCount />)
    expect(screen.getByText('3 / 10')).toBeInTheDocument()
  })

  it('applies custom className to textarea', () => {
    render(<Textarea {...defaultProps} className="my-textarea" />)
    expect(screen.getByRole('textbox')).toHaveClass('my-textarea')
  })

  it('is accessible (axe)', async () => {
    const { container } = render(<Textarea {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
