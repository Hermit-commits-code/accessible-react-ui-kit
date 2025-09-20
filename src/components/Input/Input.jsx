import React from 'react'
import './hcc-input.css'

/**
 * Input component
 *
 * Props:
 * - label: string (optional)
 * - id: string (required if label is set)
 * - value: string
 * - onChange: function (e)
 * - placeholder: string
 * - required: boolean
 * - disabled: boolean
 * - readOnly: boolean
 * - size: "sm" | "md" | "lg"
 * - fullWidth: boolean
 * - error: string (shows error state/message)
 * - success: string (shows success state/message)
 * - help: string (shows help text)
 * - className: string
 * - ...rest: any other native input props
 */
export default function Input({
  label,
  id,
  value,
  onChange,
  placeholder,
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
  const inputId =
    id ||
    (label ? `hcc-input-${Math.random().toString(36).slice(2, 10)}` : undefined)
  const describedBy =
    [
      error ? `${inputId}-error` : '',
      success ? `${inputId}-success` : '',
      help ? `${inputId}-help` : '',
    ]
      .filter(Boolean)
      .join(' ') || undefined

  let inputStateClass = ''
  if (error) inputStateClass = 'hcc-input--error'
  else if (success) inputStateClass = 'hcc-input--success'

  return (
    <div className={['hcc-input-group', className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={inputId} className="hcc-input-label">
          {label}{' '}
          {required && (
            <span aria-hidden="true" style={{ color: '#dc2626' }}>
              *
            </span>
          )}
        </label>
      )}
      <input
        type="text"
        id={inputId}
        className={[
          'hcc-input',
          `hcc-input--${size}`,
          fullWidth ? 'hcc-input--full' : '',
          inputStateClass,
        ]
          .filter(Boolean)
          .join(' ')}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-disabled={disabled}
        readOnly={readOnly}
        aria-readonly={readOnly}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...rest}
      />
      {help && (
        <div id={inputId + '-help'} className="hcc-input-help">
          {help}
        </div>
      )}
      {error && (
        <div id={inputId + '-error'} className="hcc-input-error" role="alert">
          {error}
        </div>
      )}
      {success && !error && (
        <div id={inputId + '-success'} className="hcc-input-success">
          {success}
        </div>
      )}
    </div>
  )
}
