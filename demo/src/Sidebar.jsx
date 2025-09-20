import React from 'react'
import Button from '../../src/components/Button/Button'

const navItems = [
  { label: 'Button', id: 'button' },
  { label: 'Input', id: 'input' },
  { label: 'Textarea', id: 'textarea' },
  { label: 'Select', id: 'select' },
  { label: 'Checkbox', id: 'checkbox' },
  { label: 'RadioGroup', id: 'radiogroup' },
  { label: 'Alert', id: 'alert' },
  { label: 'Card', id: 'card' },
  { label: 'Modal', id: 'modal' },
  { label: 'Spinner', id: 'spinner' },
]

export default function Sidebar({ current, onNavigate }) {
  return (
    <nav
      role="tablist"
      aria-label="Component navigation"
      style={{
        width: 220,
        minHeight: '100vh',
        background: '#f8f9fa',
        borderRight: '1px solid #e0e0e0',
        padding: 24,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <h2 style={{ margin: '0 0 24px 0', fontSize: 20 }}>Components</h2>
      {navItems.map((item) => (
        <Button
          key={item.id}
          role="tab"
          aria-selected={current === item.id}
          tabIndex={current === item.id ? 0 : -1}
          variant={current === item.id ? 'primary' : 'ghost'}
          full
          onClick={() => onNavigate(item.id)}
          style={{ justifyContent: 'flex-start' }}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  )
}
