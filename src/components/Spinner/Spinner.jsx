import React from 'react'
import './hcc-spinner.css'

/**
 * Spinner component (loading indicator)
 *
 * Props:
 * - size: "sm" | "md" | "lg"
 * - color: "primary" | "muted" | "danger"
 * - ariaLabel: string (for accessibility)
 * - className: string
 * - ...rest
 */
export default function Spinner({
  size = 'md',
  color = 'primary',
  ariaLabel = 'Loading',
  className = '',
  ...rest
}) {
  return (
    <span
      className={[
        'hcc-spinner',
        size !== 'md' && `hcc-spinner--${size}`,
        color !== 'primary' && `hcc-spinner--${color}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-label={ariaLabel}
      {...rest}
    />
  )
}
