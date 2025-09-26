import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './hcc-dropdown.css'

/**
 * Accessible Dropdown component
 * @param {object} props
 * @param {string} props.label - The label for the dropdown
 * @param {Array<{ label: string, value: string }>} props.options - The dropdown options
 * @param {string} [props.value] - The selected value
 * @param {function} [props.onChange] - Callback when value changes
 */
export function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const listboxId = `dropdown-listbox-${Math.random().toString(36).substr(2, 9)}`

  const handleSelect = (option) => {
    if (onChange) onChange(option.value)
    setOpen(false)
    buttonRef.current.focus()
  }

  return (
    <div className="hcc-dropdown">
      <label className="hcc-dropdown-label">{label}</label>
      <button
        ref={buttonRef}
        className="hcc-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
        type="button"
      >
        {options.find((o) => o.value === value)?.label || 'Select...'}
        <span aria-hidden="true" className="hcc-dropdown-arrow">
          ▼
        </span>
      </button>
      {open && (
        <ul
          id={listboxId}
          className="hcc-dropdown-listbox"
          role="listbox"
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              tabIndex={0}
              className={option.value === value ? 'selected' : ''}
              onClick={() => handleSelect(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleSelect(option)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
