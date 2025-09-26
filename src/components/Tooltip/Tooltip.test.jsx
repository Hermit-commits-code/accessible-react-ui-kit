import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('renders child and no tooltip by default', () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('shows tooltip on hover', () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    )
    fireEvent.mouseEnter(screen.getByText('Hover me'))
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip text')
  })

  it('shows tooltip on focus', () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Focus me</button>
      </Tooltip>,
    )
    fireEvent.focus(screen.getByText('Focus me'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('hides tooltip on blur', () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Focus me</button>
      </Tooltip>,
    )
    const btn = screen.getByText('Focus me')
    fireEvent.focus(btn)
    fireEvent.blur(btn)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('hides tooltip on Escape key', () => {
    render(
      <Tooltip label="Tooltip text">
        <button>Focus me</button>
      </Tooltip>,
    )
    const btn = screen.getByText('Focus me')
    fireEvent.focus(btn)
    fireEvent.keyDown(btn, { key: 'Escape' })
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })
})
