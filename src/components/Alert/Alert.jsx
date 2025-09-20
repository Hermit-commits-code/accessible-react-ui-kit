import React from 'react'
import './hcc-alert.css'

const ICONS = {
  info: (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="9" y="8" width="2" height="6" rx="1" fill="currentColor" />
      <rect x="9" y="5" width="2" height="2" rx="1" fill="currentColor" />
    </svg>
  ),
  success: (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M7 11l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  warning: (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="9" y="6" width="2" height="6" rx="1" fill="currentColor" />
      <rect x="9" y="14" width="2" height="2" rx="1" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M7.5 7.5l5 5m0-5l-5 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
}

/**
 * Alert component
 *
 * Props:
 * - variant: "info" | "success" | "warning" | "error"
 * - title: string (optional)
 * - children: node (alert body)
 * - onClose: function (optional, shows dismiss button)
 * - inline: boolean (optional, display inline)
 * - className: string
 * - ...rest: props for div
 */
export default function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  inline = false,
  className = '',
  ...rest
}) {
  const role = variant === 'error' || variant === 'warning' ? 'alert' : 'status'
  const ariaLive =
    variant === 'error' || variant === 'warning' ? 'assertive' : 'polite'

  return (
    <div
      className={[
        'hcc-alert',
        `hcc-alert--${variant}`,
        inline ? 'hcc-alert-inline' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role={role}
      aria-live={ariaLive}
      tabIndex={-1}
      {...rest}
    >
      <span className="hcc-alert-icon">{ICONS[variant]}</span>
      <div className="hcc-alert-content">
        {title && <span className="hcc-alert-title">{title}</span>}
        {children}
      </div>
      {onClose && (
        <button
          className="hcc-alert-close"
          aria-label="Dismiss alert"
          type="button"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  )
}
