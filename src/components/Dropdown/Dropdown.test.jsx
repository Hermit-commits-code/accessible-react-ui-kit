import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]

  it('renders label and trigger', () => {
    render(<Dropdown label="Test Dropdown" options={options} />)
    expect(screen.getByText('Test Dropdown')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('opens listbox on click', () => {
    render(<Dropdown label="Test Dropdown" options={options} />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('selects an option on click', () => {
    const handleChange = jest.fn()
    render(
      <Dropdown
        label="Test Dropdown"
        options={options}
        onChange={handleChange}
      />,
    )
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByText('Option 2'))
    expect(handleChange).toHaveBeenCalledWith('2')
  })

  it('closes listbox on blur', () => {
    render(<Dropdown label="Test Dropdown" options={options} />)
    fireEvent.click(screen.getByRole('button'))
    fireEvent.blur(screen.getByRole('button'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('selects option with Enter key', () => {
    const handleChange = jest.fn()
    render(
      <Dropdown
        label="Test Dropdown"
        options={options}
        onChange={handleChange}
      />,
    )
    fireEvent.click(screen.getByRole('button'))
    const option = screen.getByText('Option 3')
    fireEvent.keyDown(option, { key: 'Enter' })
    expect(handleChange).toHaveBeenCalledWith('3')
  })
})
