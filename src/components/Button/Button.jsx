import React from "react";
import "../hcc-button.css";

/**
 * Button component
 *
 * Props:
 * - variant: "primary" | "secondary" | "danger" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - disabled: boolean
 * - loading: boolean (shows spinner, disables)
 * - full: boolean (full width)
 * - leftIcon: ReactNode
 * - rightIcon: ReactNode
 * - children: node
 * - type: "button" | "submit" | "reset"
 * - className: string
 * - ...rest button props
 */
export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  full = false,
  leftIcon,
  rightIcon,
  children,
  type = "button",
  className = "",
  ...rest
}) {
  const isDisabled = disabled || loading;
  return (
    <button
      type={type}
      className={[
        "hcc-btn",
        `hcc-btn--${variant}`,
        size !== "md" && `hcc-btn--${size}`,
        full && "hcc-btn--full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
    >
      {loading && <span className="hcc-btn-spinner" aria-hidden="true" />}
      {leftIcon && <span className="hcc-btn-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="hcc-btn-icon">{rightIcon}</span>}
    </button>
  );
}
