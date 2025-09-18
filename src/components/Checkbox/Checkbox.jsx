import React from 'react'
import '../hcc-checkbox.css'

/**
 * Checkbox component
 *
 * Props:
 * - label: string (optional, shown right of the box)
 * - id: string (required if using label)
 * - checked: boolean
 * - onChange: function (e)
 * - required: boolean
 * - disabled: boolean
 * - readOnly: boolean
 * - size: "sm" | "md" | "lg"
 * - error: string (shows error state/message)
 * - success: string (shows success state/message)
 * - help: string (shows help text)
 * - className: string
 * - ...rest: any other native checkbox props
 */
export default function Checkbox({
  label,
  id,
  checked,
  onChange,
  required = false,
  disabled = false,
  readOnly = false,
  size = 'md',
  error = '',
  success = '',
  help = '',
  className = '',
  ...rest
}) {
  const inputId =
    id ||
    (label
      ? `hcc-checkbox-${Math.random().toString(36).slice(2, 10)}`
      : undefined)
  const describedBy =
    [
      error ? `${inputId}-error` : '',
      success ? `${inputId}-success` : '',
      help ? `${inputId}-help` : '',
    ]
      .filter(Boolean)
      .join(' ') || undefined

  let checkStateClass = ''
  if (error) checkStateClass = 'hcc-checkbox--error'
  else if (success) checkStateClass = 'hcc-checkbox--success'
  if (size === 'sm') checkStateClass += ' hcc-checkbox--sm'
  if (size === 'lg') checkStateClass += ' hcc-checkbox--lg'

  return (
    <div
      className={['hcc-checkbox-group', className].filter(Boolean).join(' ')}
    >
      <div className="hcc-checkbox-label-row">
        <input
          type="checkbox"
          id={inputId}
          className={['hcc-checkbox', checkStateClass]
            .filter(Boolean)
            .join(' ')}
          checked={checked}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...rest}
        />
        {label && (
          <label htmlFor={inputId} className="hcc-checkbox-label">
            {label}{' '}
            {required && (
              <span aria-hidden="true" style={{ color: '#dc2626' }}>
                *
              </span>
            )}
          </label>
        )}
      </div>
      {help && (
        <div id={inputId + '-help'} className="hcc-checkbox-help">
          {help}
        </div>
      )}
      {error && (
        <div
          id={inputId + '-error'}
          className="hcc-checkbox-error"
          role="alert"
        >
          {error}
        </div>
      )}
      {success && !error && (
        <div id={inputId + '-success'} className="hcc-checkbox-success">
          {success}
        </div>
      )}
    </div>
  )
}
