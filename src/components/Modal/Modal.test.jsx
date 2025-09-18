import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Modal from './Modal'

describe('Modal', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    header: 'Header',
    footer: 'Footer',
    children: <div>Modal content</div>,
    className: 'custom-class',
    size: 'md',
    center: true,
    closeButton: true,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders when open', () => {
    render(<Modal {...defaultProps} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when open is false', () => {
    render(<Modal {...defaultProps} open={false} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls onClose when backdrop is clicked', () => {
    render(<Modal {...defaultProps} />)
    fireEvent.mouseDown(screen.getByRole('dialog'))
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('calls onClose when Escape is pressed', () => {
    render(<Modal {...defaultProps} />)
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('renders header and footer if provided', () => {
    render(<Modal {...defaultProps} />)
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders close button if closeButton is true', () => {
    render(<Modal {...defaultProps} closeButton={true} />)
    expect(screen.getByLabelText(/close modal/i)).toBeInTheDocument()
  })

  it('does not render close button if closeButton is false', () => {
    render(<Modal {...defaultProps} closeButton={false} />)
    expect(screen.queryByLabelText(/close modal/i)).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    render(<Modal {...defaultProps} />)
    fireEvent.click(screen.getByLabelText(/close modal/i))
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('applies custom className to modal', () => {
    render(<Modal {...defaultProps} className="my-modal" />)
    const modal = screen.getByRole('dialog').querySelector('.hcc-modal')
    expect(modal).toHaveClass('my-modal')
  })

  it('is accessible (axe)', async () => {
    const { container } = render(<Modal {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
