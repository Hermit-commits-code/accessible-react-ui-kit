import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs } from './Tabs'

describe('Tabs', () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> },
    { label: 'Tab 3', content: <div>Content 3</div> },
  ]

  it('renders all tab buttons', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(3)
  })

  it('shows the correct tabpanel by default', () => {
    render(<Tabs tabs={tabs} defaultIndex={1} />)
    expect(screen.getByText('Content 2')).toBeVisible()
  })

  it('changes tab on click', () => {
    render(<Tabs tabs={tabs} />)
    fireEvent.click(screen.getByText('Tab 3'))
    expect(screen.getByText('Content 3')).toBeVisible()
  })

  it('changes tab with arrow keys', () => {
    render(<Tabs tabs={tabs} />)
    const tab1 = screen.getByText('Tab 1')
    fireEvent.keyDown(tab1, { key: 'ArrowRight' })
    expect(screen.getByText('Content 2')).toBeVisible()
    fireEvent.keyDown(screen.getByText('Tab 2'), { key: 'ArrowLeft' })
    expect(screen.getByText('Content 1')).toBeVisible()
  })
})
