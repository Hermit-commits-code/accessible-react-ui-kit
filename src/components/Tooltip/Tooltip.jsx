import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './hcc-tooltip.css'

/**
 * Accessible Tooltip component
 * @param {object} props
 * @param {React.ReactNode} props.children - The element that triggers the tooltip
 * @param {string} props.label - The tooltip text
 * @param {string} [props.placement] - top, right, bottom, left
 */
export function Tooltip({ children, label, placement = 'top' }) {
  const [visible, setVisible] = useState(false)
  const triggerRef = useRef(null)
  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`

  return (
    <span
      className="hcc-tooltip-wrapper"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <span
        ref={triggerRef}
        tabIndex={0}
        aria-describedby={visible ? tooltipId : undefined}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setVisible(false)
        }}
        className="hcc-tooltip-trigger"
      >
        {children}
      </span>
      {visible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`hcc-tooltip hcc-tooltip-${placement}`}
        >
          {label}
        </span>
      )}
    </span>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
}
