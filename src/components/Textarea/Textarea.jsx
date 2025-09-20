import React from 'react'
import './hcc-textarea.css'

/**
 * Textarea component
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
 * - maxLength: number (optional, for counter)
 * - showCount: boolean (show character counter)
 * - className: string
 * - ...rest: any other native textarea props
 */
export default function Textarea({
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
  maxLength,
  showCount = false,
  className = '',
  ...rest
}) {
  const textareaId =
    id ||
    (label
      ? `hcc-textarea-${Math.random().toString(36).slice(2, 10)}`
      : undefined)
  const describedBy =
    [
      error ? `${textareaId}-error` : '',
      success ? `${textareaId}-success` : '',
      help ? `${textareaId}-help` : '',
      showCount && maxLength ? `${textareaId}-counter` : '',
    ]
      .filter(Boolean)
      .join(' ') || undefined

  let textareaStateClass = ''
  if (error) textareaStateClass = 'hcc-textarea--error'
  else if (success) textareaStateClass = 'hcc-textarea--success'

  return (
    <div className="hcc-textarea-group">
      {label && (
        <label htmlFor={textareaId} className="hcc-textarea-label">
          {label}{' '}
          {required && (
            <span aria-hidden="true" style={{ color: '#dc2626' }}>
              *
            </span>
          )}
        </label>
      )}
      <textarea
        id={textareaId}
        role="textbox"
        className={[
          'hcc-textarea',
          `hcc-textarea--${size}`,
          fullWidth ? 'hcc-textarea--full' : '',
          textareaStateClass,
          className,
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
        maxLength={maxLength}
        {...rest}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {help && !error && (
            <div id={textareaId + '-help'} className="hcc-textarea-help">
              {help}
            </div>
          )}
          {error && (
            <div
              id={textareaId + '-error'}
              className="hcc-textarea-error"
              role="alert"
            >
              {error}
            </div>
          )}
          {success && !error && (
            <div id={textareaId + '-success'} className="hcc-textarea-success">
              {success}
            </div>
          )}
        </div>
        {showCount && maxLength && (
          <div id={textareaId + '-counter'} className="hcc-textarea-counter">
            {value.length} / {maxLength}
          </div>
        )}
      </div>
    </div>
  )
}
