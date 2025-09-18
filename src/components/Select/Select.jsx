import React from 'react'
import './hcc-select.css'

/**
 * Select component
 *
 * Props:
 * - label: string (optional)
 * - id: string (required if label is set)
 * - value: string
 * - onChange: function (e)
 * - options: array of { label: string, value: string, disabled?: boolean }
 * - placeholder: string (shown as first default option)
 * - required: boolean
 * - disabled: boolean
 * - readOnly: boolean
 * - size: "sm" | "md" | "lg"
 * - fullWidth: boolean
 * - error: string (shows error state/message)
 * - success: string (shows success state/message)
 * - help: string (shows help text)
 * - className: string
 * - ...rest: any other native select props
 */
export default function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = '',
  required = false,
  disabled = false,
  readOnly = false,
  size = 'md',
  fullWidth = false,
  error = '',
  success = '',
  help = '',
  className = '',
  ...rest
}) {
  const selectId =
    id ||
    (label
      ? `hcc-select-${Math.random().toString(36).slice(2, 10)}`
      : undefined)
  const describedBy =
    [
      error ? `${selectId}-error` : '',
      success ? `${selectId}-success` : '',
      help ? `${selectId}-help` : '',
    ]
      .filter(Boolean)
      .join(' ') || undefined

  let selectStateClass = ''
  if (error) selectStateClass = 'hcc-select--error'
  else if (success) selectStateClass = 'hcc-select--success'

  return (
    <div className="hcc-select-group">
      {label && (
        <label htmlFor={selectId} className="hcc-select-label">
          {label}{' '}
          {required && (
            <span aria-hidden="true" style={{ color: '#dc2626' }}>
              *
            </span>
          )}
        </label>
      )}
      <div className="hcc-select-wrapper">
        <select
          id={selectId}
          className={[
            'hcc-select',
            `hcc-select--${size}`,
            fullWidth ? 'hcc-select--full' : '',
            selectStateClass,
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="hcc-select-arrow"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M5.75 8.5l4.25 4 4.25-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {help && !error && (
        <div id={selectId + '-help'} className="hcc-select-help">
          {help}
        </div>
      )}
      {error && (
        <div id={selectId + '-error'} className="hcc-select-error" role="alert">
          {error}
        </div>
      )}
      {success && !error && (
        <div id={selectId + '-success'} className="hcc-select-success">
          {success}
        </div>
      )}
    </div>
  )
}
