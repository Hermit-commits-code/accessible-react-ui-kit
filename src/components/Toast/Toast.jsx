import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './hcc-toast.css'

/**
 * Accessible Toast notification
 * @param {object} props
 * @param {string} props.message - The message to display
 * @param {boolean} props.open - Whether the toast is visible
 * @param {function} [props.onClose] - Called when toast closes
 * @param {number} [props.duration] - Auto-close after ms (default 4000)
 * @param {string} [props.variant] - success, error, info, warning
 */
export function Toast({
  message,
  open,
  onClose,
  duration = 4000,
  variant = 'info',
}) {
  useEffect(() => {
    if (!open) return
    if (duration === 0) return
    const timer = setTimeout(() => {
      if (onClose) onClose()
    }, duration)
    return () => clearTimeout(timer)
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div
      className={`hcc-toast hcc-toast-${variant}`}
      role="status"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      tabIndex={0}
    >
      {message}
      {onClose && (
        <button
          className="hcc-toast-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  duration: PropTypes.number,
  variant: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}
