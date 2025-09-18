import React from "react";
import "../hcc-button.css";

/**
 * Button component
 *
 * Props:
 * - children: ReactNode
 * - variant: "primary" | "secondary" | "neutral" | "danger"
 * - size: "sm" | "md" | "lg"
 * - fullWidth: boolean
 * - loading: boolean
 * - disabled: boolean
 * - type: "button" | "submit" | "reset"
 * - className: string (optional, extra classes)
 * - ...rest: any other native button props
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  const classes = [
    "hcc-btn",
    `hcc-btn--${variant}`,
    `hcc-btn--${size}`,
    fullWidth ? "hcc-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Accessibility: if loading, aria-busy and disable interaction
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className="hcc-btn__spinner" aria-hidden="true" />}
      <span style={loading ? { opacity: 0.7 } : undefined}>{children}</span>
    </button>
  );
}
