import React from "react";
import "../hcc-button.css";

/**
 * Button Component
 *
 * Props:
 * - children: Content inside the button
 * - variant: "primary" | "secondary" | "danger" (default: "primary")
 * - type: "button" | "submit" | "reset" (default: "button")
 * - className: string (optional, additional classes)
 * - ...rest: any other props (onClick, disabled, etc.)
 */
export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...rest
}) {
  const variantClass =
    variant === "secondary"
      ? "hcc-btn--secondary"
      : variant === "danger"
        ? "hcc-btn--danger"
        : "";

  return (
    <button
      type={type}
      className={`hcc-btn ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
