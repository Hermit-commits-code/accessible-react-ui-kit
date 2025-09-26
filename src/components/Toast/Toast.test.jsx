import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Toast } from './Toast'

describe('Toast', () => {
  it('renders message when open', () => {
    render(<Toast message="Hello!" open={true} />)
    expect(screen.getByText('Hello!')).toBeInTheDocument()
  })

  it('does not render when not open', () => {
    render(<Toast message="Bye!" open={false} />)
    expect(screen.queryByText('Bye!')).not.toBeInTheDocument()
  })

  it('calls onClose after duration', () => {
    jest.useFakeTimers()
    const onClose = jest.fn()
    render(
      <Toast message="Bye!" open={true} onClose={onClose} duration={1000} />,
    )
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(onClose).toHaveBeenCalled()
    jest.useRealTimers()
  })

  it('calls onClose when close button clicked', () => {
    const onClose = jest.fn()
    render(<Toast message="Bye!" open={true} onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Close'))
    expect(onClose).toHaveBeenCalled()
  })

  it('has correct aria-live for error', () => {
    render(<Toast message="Error!" open={true} variant="error" />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'assertive')
  })

  it('has correct aria-live for info', () => {
    render(<Toast message="Info!" open={true} variant="info" />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite')
  })
})
